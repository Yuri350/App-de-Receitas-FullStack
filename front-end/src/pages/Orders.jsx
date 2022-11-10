import { useContext, useEffect, useState } from 'react';
import OrdersCard from '../components/OrdersCard';
import { AuthContext } from '../contexts/AuthContext';
import { requestCustomerOrders, requestSellerOrders } from '../services/requestOrder';

export default function Orders() {
  const [orders, setOrders] = useState([]);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    const getOrders = async () => {
      try {
        if (user.role === 'customer') {
          const orderCustomer = await requestCustomerOrders(user.token);
          setOrders(orderCustomer);
        } else if (user.role === 'seller') {
          const orderCustomer = await requestSellerOrders(user.token);
          setOrders(orderCustomer);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getOrders();
  }, [user]);

  return (
    <div>
      {
        orders.length > 0
          ? orders.map((order) => (
            <OrdersCard
              key={ order.id }
              id={ order.id }
              saleDate={ order.saleDate }
              num={ order.id }
              totalPrice={ order.totalPrice }
              status={ order.status }
              role={ user && user.role }
              fullAddress={ `${order.deliveryAddress}, ${order.deliveryNumber}` }
            />
          ))
          : <h2>No orders yet</h2>
      }
    </div>
  );
}
