import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Products from '../pages/Products';
import Checkout from '../pages/Checkout';
import OrderDetail from '../pages/OrderDetail';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={ <Layout /> }>
        <Route exact path="*" element={ <Navigate to="/customer/products" /> } />
        <Route exact path="/customer/products" element={ <Products /> } />
        <Route exact path="/customer/checkout" element={ <Checkout /> } />
        <Route exact path="/seller/orders" element={ <h1>Seller</h1> } />
        <Route exact path="/customer/orders/:id" element={ <OrderDetail /> } />
        <Route exact path="/admin/manage" element={ <h1>Admin</h1> } />
      </Route>
    </Routes>
  );
}
