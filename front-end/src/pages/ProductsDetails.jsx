import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import NavBar from '../components/navbar';

function ProductsDetails() {
  const [allProducts, setAllProducts] = useState([]); // Products: nao subi pro contexto e preciso
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
            allProducts.map((
              {
                item,
                descricao,
                quantidade,
                valor,
                total,
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

export default ProductsDetails;
