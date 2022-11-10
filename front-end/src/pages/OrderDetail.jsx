import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import orderDetails, { requestPatch } from '../services/orderDetails';
import priceFormatter, { dateFormatter } from '../utils/formatter';

function OrderDetail() {
  const [data, setData] = useState({});
  const [productsData, setProductsData] = useState([]);
  const [pessoaVendedora, setPessoaVendedora] = useState({});

  const { id } = useParams();

  const handleChangeStatus = async () => {
    await requestPatch(id);
    window.location.reload();
  };

  useEffect(() => {
    const getOrderDetails = async () => {
      const { info, products, nomePessoaVendedora } = await orderDetails(id);
      console.log(info);
      setPessoaVendedora(nomePessoaVendedora);
      setData(info);
      setProductsData(products);
    };
    getOrderDetails();
  }, [id]);

  return (
    <div>
      <h1>Detalhe do pedido</h1>
      <header>
        <span data-testid="customer_order_details__element-order-details-label-order-id">
          Pedido
          { data.id }
        </span>
        <span
          data-testid="customer_order_details__element-order-details-label-seller-name"
        >
          P. Venda
          { pessoaVendedora.name }
        </span>
        <span
          data-testid="customer_order_details__element-order-details-label-order-date"
        >
          Data
          { data.saleDate && dateFormatter.format(new Date(data.saleDate)) }
        </span>
        <span
          data-testid={ 'customer_order_details__'
          + 'element-order-details-label-delivery-status' }
        >
          { data.status }
        </span>
        <button
          data-testid="customer_order_details__button-delivery-check"
          disabled={ data.status !== 'preparando' }
          onClick={ handleChangeStatus }
          type="button"
        >
          MARCAR COMO ENTREGUE
        </button>
      </header>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
          </tr>
        </thead>
        <tbody>
          {
            productsData.map((product, index) => (
              <tr key={ product.id }>
                <td
                  data-testid={ `customer_order_details__
                  element-order-table-item-number-${index}` }
                >
                  {`${index + 1}`}
                </td>
                <td
                  data-testid={ `customer_order_details__
                  element-order-table-name-${index}` }
                >
                  { product.name }
                </td>
                <td
                  data-testid={ `customer_order_details__
                  element-order-table-quantity-${index}` }
                >
                  { product.ProdutoVendido[0].quantity }
                </td>
                <td
                  data-testid={ `customer_order_details__
                  element-order-table-unit-price-${index}` }
                >
                  { priceFormatter.format(product.price) }
                </td>
                <td
                  data-testid={ `customer_order_details__
                  element-order-table-sub-total-${index}` }
                >
                  { priceFormatter.format(
                    Number(product.price) * product.ProdutoVendido[0].quantity,
                  ) }
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <span data-testid="customer_order_details__element-order-total-price">
        Total:
        {' '}
        { priceFormatter.format(data.totalPrice) }
      </span>
    </div>
  );
}

export default OrderDetail;
