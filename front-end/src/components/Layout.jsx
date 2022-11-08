import { Outlet } from 'react-router-dom';
import NavBar from './navbar';

export default function Layout() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}
