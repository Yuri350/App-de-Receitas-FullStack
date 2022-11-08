import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import priceFormatter, { dateFormatter } from '../utils/formatter';

export default function OrdersCard({
  id, totalPrice, saleDate, status, role, fullAddress,
}) {
  return (
    <div>
      <Link to={ `/${role}/orders/${id}` }>
        <div>
          <div>
            <p>Pedido</p>
            <span data-testid={ `${role}_orders__element-order-id-${id}` }>
              {`000${id}`}
            </span>
          </div>
          <p
            data-testid={ `${role}_orders__element-delivery-status-${id}` }
          >
            {status}
          </p>
          <div>
            <p data-testid={ `${role}_orders__element-order-date-${id}` }>
              {dateFormatter.format(new Date(saleDate))}
            </p>
            <p data-testid={ `${role}_orders__element-card-price-${id}` }>
              {priceFormatter.format(totalPrice)}
            </p>
          </div>
        </div>
        {
          role === 'seller' && (
            <span data-testid={ `seller_orders__element-card-address-${id}` }>
              {fullAddress}
            </span>
          )
        }
      </Link>
    </div>
  );
}

OrdersCard.propTypes = {
  id: PropTypes.number.isRequired,
  totalPrice: PropTypes.string.isRequired,
  saleDate: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  fullAddress: PropTypes.string.isRequired,
};
