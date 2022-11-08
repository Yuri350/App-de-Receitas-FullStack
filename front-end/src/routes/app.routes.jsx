import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Products from '../pages/Products';
import Checkout from '../pages/Checkout';
import Orders from '../pages/Orders';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={ <Layout /> }>
        <Route exact path="*" element={ <Navigate to="/customer/products" /> } />
        <Route exact path="/customer/products" element={ <Products /> } />
        <Route exact path="/customer/checkout" element={ <Checkout /> } />
        <Route exact path="/customer/orders" element={ <Orders /> } />
        <Route exact path="/seller/orders" element={ <Orders /> } />
        <Route exact path="/customer/orders/:id" element={ <h1>Customer order</h1> } />
        <Route exact path="/seller/orders/:id" element={ <h1>Seller Order</h1> } />
        <Route exact path="/admin/manage" element={ <h1>Admin</h1> } />
      </Route>
    </Routes>
  );
}
