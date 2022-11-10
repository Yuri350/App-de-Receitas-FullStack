import PropsTypes from 'prop-types';
import priceFormatter from '../utils/formatter';

export default function TableOrderDetails({ products, role }) {
  return (
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
          products.map((product, index) => (
            <tr key={ product.id }>
              <td
                data-testid={ `${role}_order_details__`
                  + `element-order-table-item-number-${index}` }
              >
                {`${index + 1}`}
              </td>
              <td
                data-testid={ `${role}_order_details__`
                + `element-order-table-name-${index}` }
              >
                {product.name}
              </td>
              <td
                data-testid={ `${role}_order_details__`
                + `element-order-table-quantity-${index}` }
              >
                {product.ProdutoVendido[0].quantity}
              </td>
              <td
                data-testid={ `${role}_order_details__`
                + `element-order-table-unit-price-${index}` }
              >
                {priceFormatter.format(product.price)}
              </td>
              <td
                data-testid={ `${role}_order_details__`
                + `element-order-table-sub-total-${index}` }
              >
                {priceFormatter.format(
                  Number(product.price) * product.ProdutoVendido[0].quantity,
                )}
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

TableOrderDetails.propTypes = {
  products: PropsTypes.arrayOf(PropsTypes.shape({
    id: PropsTypes.number,
    name: PropsTypes.string,
    price: PropsTypes.string,
    ProdutoVendido: PropsTypes.arrayOf(PropsTypes.shape({
      quantity: PropsTypes.number,
    })),
  })).isRequired,
  role: PropsTypes.string.isRequired,
};
