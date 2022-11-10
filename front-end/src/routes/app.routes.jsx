import { Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import Products from '../pages/Products';
import Checkout from '../pages/Checkout';
import OrderDetail from '../pages/OrderDetail';
import Orders from '../pages/Orders';
import Admin from '../pages/Admin';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={ <Layout /> }>
        <Route exact path="/customer/products" element={ <Products /> } />
        <Route exact path="/customer/checkout" element={ <Checkout /> } />
        <Route exact path="/customer/orders/:id" element={ <OrderDetail /> } />
        <Route exact path="/customer/orders" element={ <Orders /> } />
        <Route exact path="/seller/orders" element={ <Orders /> } />
        <Route exact path="/seller/orders/:id" element={ <OrderDetail /> } />
        <Route exact path="/admin/manage" element={ <Admin /> } />
      </Route>
    </Routes>
  );
}
