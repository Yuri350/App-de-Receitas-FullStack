import api from './api';

export const requestCustomerOrders = async (token) => {
  const { data } = await api.get('sale/customer/orders', {
    headers: {
      authorization: token,
    },
  });
  return data;
};

export const requestSellerOrders = async (token) => {
  const { data } = await api.get('sale/seller/orders', {
    headers: {
      authorization: token,
    },
  });
  return data;
};
