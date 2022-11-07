import { Navigate, Route, Routes } from 'react-router-dom';
import Products from '../pages/Products';

export default function AppRoutes() {
  return (
    <Routes>
      <Route exact path="*" element={ <Navigate to="/customer/products" /> } />
      <Route exact path="/customer/products" element={ <Products /> } />
    </Routes>
  );
}
