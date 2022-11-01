import { Navigate, Route, Routes } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

export default function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={ <Navigate to="/login" /> } />
      <Route path="/login" element={ <SignIn /> } />
      <Route path="/register" element={ <SignUp /> } />
    </Routes>
  );
}
