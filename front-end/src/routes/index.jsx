import { useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

export default function Router() {
  const { isAuthenticate, user } = useContext(AuthContext);

  const { pathname } = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    const IsLoginOrRegisterPage = ['/login', '/register'].includes(pathname);
    const homepages = {
      customer: '/customer/products',
      seller: '/seller/orders',
      administrator: '/admin/manage',
    };

    if (user && IsLoginOrRegisterPage) {
      navigate(homepages[user.role], { replace: true });
    }
  }, [pathname, user, navigate]);

  return isAuthenticate ? <AppRoutes /> : <AuthRoutes />;
}
