import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

export default function NavBar() {
  const { setIsAuthenticate } = useContext(AuthContext);

  return (
    <header>
      <nav>
        <NavLink
          data-testid="customer_products__element-navbar-link-products"
          to="/customer/products"
        >
          Produtos
        </NavLink>
        <NavLink
          data-testid="customer_products__element-navbar-link-orders"
          to="/customer/orders"
        >
          Meus Pedidos
        </NavLink>
        <NavLink
          data-testid="customer_products__element-navbar-user-full-name"
          to="/user"
        >
          User
        </NavLink>
        <NavLink
          data-testid="customer_products__element-navbar-link-logout"
          to="/login"
          onClick={ () => setIsAuthenticate(false) }
        >
          Sair
        </NavLink>
      </nav>
    </header>
  );
}
