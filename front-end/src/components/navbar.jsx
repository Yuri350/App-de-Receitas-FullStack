import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  const [user, setUser] = useState('');
  useEffect(() => () => {
    const userData = localStorage.getItem('userData');
    const username = JSON.parse(userData);
    //  console.log(username.name); verificar no local storage.
    setUser(username.name);
  });
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
          { user }
        </NavLink>
        <NavLink
          data-testid="customer_products__element-navbar-link-logout"
          to="/logout"
        >
          Sair
        </NavLink>
      </nav>
    </header>
  );
}
