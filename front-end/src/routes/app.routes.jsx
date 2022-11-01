import { Navigate, Route, Routes } from 'react-router-dom';
import Products from '../pages/Products';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={ <Navigate to="/customer/products" /> } />
      <Route path="/customer/products" element={ <Products /> } />
    </Routes>
  );
}
