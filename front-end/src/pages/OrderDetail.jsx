import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import orderDetails, { requestPatch } from '../services/orderDetails';
import priceFormatter, { dateFormatter } from '../utils/formatter';
import { AuthContext } from '../contexts/AuthContext';
import ButtonPreparing from '../components/ButtonPreparing';
import ButtonDispatch from '../components/ButtonDispatch';
import TableOrderDetails from '../components/TableOrderDetails';

function OrderDetail() {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState({});
  const [productsData, setProductsData] = useState([]);
  const [pessoaVendedora, setPessoaVendedora] = useState({});
  const [orderStatus, setOrderStatus] = useState('');

  const { id } = useParams();

  const handleChangeStatus = async (status) => {
    await requestPatch(id, status);
    setOrderStatus(status);
  };

  useEffect(() => {
    const getOrderDetails = async () => {
      const { info, product, nomePessoaVendedora } = await orderDetails(id);
      setPessoaVendedora(nomePessoaVendedora);
      setData(info);
      setProductsData(product);
    };
    getOrderDetails();
  }, [id, orderStatus]);

  return (
    <div>
      <h1>Detalhe do pedido</h1>
      <header>
        <span
          data-testid={ `${user.role}_order_details__`
          + 'element-order-details-label-order-id' }
        >
          {`PEDIDO ${data.id}`}
        </span>
        {
          user.role === 'customer' && (
            <span
              data-testid={ 'customer_order_details__'
              + 'element-order-details-label-seller-name' }
            >
              { `P. Venda ${pessoaVendedora.name}`}
            </span>
          )
        }
        <span
          data-testid={ `${user.role}_order_details__`
        + 'element-order-details-label-order-date' }
        >
          Data
          {data.saleDate && dateFormatter.format(new Date(data.saleDate))}
        </span>
        <span
          data-testid={ `${user.role}_order_details__`
            + 'element-order-details-label-delivery-status' }
        >
          {data.status}
        </span>
        {
          user.role === 'customer' && (
            <button
              data-testid="customer_order_details__button-delivery-check"
              disabled={ data.status !== 'Em Trânsito' }
              onClick={ () => handleChangeStatus('Entregue') }
              type="button"
            >
              MARCAR COMO ENTREGUE
            </button>
          )
        }
        {
          user.role === 'seller' && (
            <>
              <ButtonPreparing
                title="PREPARANDO PEDIDO"
                disabled={ data.status !== 'Pendente' }
                onClick={ () => handleChangeStatus('Preparando') }
              />
              <ButtonDispatch
                title="SAIU PARA ENTREGA"
                disabled={ data.status !== 'Preparando' }
                onClick={ () => handleChangeStatus('Em Trânsito') }
              />
            </>

          )
        }
      </header>
      <TableOrderDetails products={ productsData } role={ user.role } />
      <span data-testid={ `${user.role}_order_details__element-order-total-price` }>
        Total:
        {priceFormatter.format(data.totalPrice)}
      </span>
    </div>
  );
}

export default OrderDetail;
