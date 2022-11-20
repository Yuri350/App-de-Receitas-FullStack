/* eslint-disable react/jsx-max-depth */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import priceFormatter, { dateFormatter } from '../../utils/formatter';
import { Card, Content, OrderNumber, ListItem } from './styles';

export default function OrdersCard({
  id, totalPrice, saleDate, status, role, fullAddress,
}) {
  return (
    <div
      style={ {
        display: 'inline-block',
        flexDirection: 'row',
        alignItems: 'center',
        height: '60vh',
      } }
    >
      <Card>
        <Content>
          <Link to={ `/${role}/orders/${id}` }>

            <OrderNumber data-testid={ `${role}_orders__element-order-id-${id}` }>
              {`000${id}`}
            </OrderNumber>

            <ListItem
              data-testid={ `${role}_orders__element-delivery-status-${id}` }
            >
              {status}
            </ListItem>

            <ListItem data-testid={ `${role}_orders__element-order-date-${id}` }>
              {dateFormatter.format(new Date(saleDate))}
            </ListItem>
            <ListItem data-testid={ `${role}_orders__element-card-price-${id}` }>
              {priceFormatter.format(totalPrice)}
            </ListItem>

            {
              role === 'seller' && (
                <span data-testid={ `seller_orders__element-card-address-${id}` }>
                  {fullAddress}
                </span>
              )
            }
          </Link>
        </Content>
      </Card>
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
