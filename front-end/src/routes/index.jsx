import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

export default function Router() {
  const { isAuthenticate } = useContext(AuthContext);

  return isAuthenticate ? <AppRoutes /> : <AuthRoutes />;
}
