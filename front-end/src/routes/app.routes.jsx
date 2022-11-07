import { Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import Products from '../pages/Products';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={ <Layout /> }>
        <Route exact path="/customer/products" element={ <Products /> } />
        <Route exact path="/customer/checkout" element={ <h1>Checkout</h1> } />
        <Route exact path="/seller/orders" element={ <h1>Seller</h1> } />
        <Route exact path="/admin/manage" element={ <h1>Admin</h1> } />
      </Route>
    </Routes>
  );
}
