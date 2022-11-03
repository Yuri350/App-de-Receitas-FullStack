import { useContext } from 'react';
import Loading from '../components/Loading';
import { AuthContext } from '../contexts/AuthContext';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

export default function Router() {
  const { isAuthenticate, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loading />;
  }

  return isAuthenticate ? <AppRoutes /> : <AuthRoutes />;
}
