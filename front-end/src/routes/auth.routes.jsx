import { Navigate, Route, Routes } from 'react-router-dom';
import LayoutLoginRegister from '../components/LayoutLoginRegister';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

export default function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={ <LayoutLoginRegister /> }>
        <Route exact path="*" element={ <Navigate to="/login" /> } />
        <Route exact path="/login" element={ <SignIn /> } />
        <Route exact path="/register" element={ <SignUp /> } />
      </Route>
    </Routes>
  );
}
