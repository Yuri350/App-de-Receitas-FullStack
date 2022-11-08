import React, { useState, useEffect } from 'react';
import { userParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import NavBar from '../components/navbar';
import orderDetails from '../services/orderDetails';

function OrderDetail() {
  const [data, setData] = useState({});
  const [productsData, setProductsData] = useState([]);

  const { id } = userParams();

  useEffect(() => {
    const { info, products } = orderDetails(id);
    setData(info);
    setProductsData(products);
  }, [id]);

  return (
    <div>
      <NavBar />
      <h1>Detalhe do pedido</h1>
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
            productsData.map((
              {
                saleId,
                productId,
                quantity,
              },
              index,
            ) => (
              <tr key={ uuidv4() }>
                <td
                  data-testid={ `seller_order_details__
                  element-order-table-item-number-${index + 1}` } // igual
                >
                  {`${index + 1}`}
                </td>
                <td
                  data-testid={ `seller_order_details__
                  element-order-table-item-number-${index + 1}` } // igual
                >
                  { item }
                </td>
                <td
                  data-testid={ `seller_order_details__
                  element-order-table-name-${index + 1}` }
                >
                  { descricao }
                </td>
                <td
                  data-testid={ `seller_order_details__
                  element-order-table-quantity-${index + 1}` }
                >
                  { quantidade }
                </td>
                <td
                  data-testid={ `seller_order_details__
                  element-order-table-unit-price-${index + 1}` }
                >
                  { valor }
                </td>
                <td
                  data-testid={ `seller_order_details__
                  element-order-table-sub-total-${index + 1}` }
                >
                  { total }
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default OrderDetail;
