import { Route, Routes } from 'react-router-dom';
import Products from '../pages/Products';
import ProductsDetails from '../pages/ProductsDetails';

export default function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/customer/products" element={ <Products /> } />
      <Route exact path="/customer/productsDetails" element={ <ProductsDetails /> } />
    </Routes>
  );
}
