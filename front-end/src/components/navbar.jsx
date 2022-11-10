import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

export default function NavBar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <header>
      <nav>
        {
          user.role === 'seller' && (

            <NavLink
              data-testid="customer_products__element-navbar-link-orders"
              to="/seller/orders"
            >
              Pedidos
            </NavLink>
          )
        }

        {
          user.role === 'customer' && (
            <>
              <NavLink
                data-testid="customer_products__element-navbar-link-products"
                to="/customer/products"
              >
                Produtos
              </NavLink>
              <NavLink
                data-testid="customer_products__element-navbar-link-orders"
                to="/customer/orders" //
              >
                Meus Pedidos
              </NavLink>
            </>
          )
        }
        <NavLink
          data-testid="customer_products__element-navbar-user-full-name"
          to="/user"
        >
          {user?.name}
        </NavLink>
        <button
          data-testid="customer_products__element-navbar-link-logout"
          type="button"
          onClick={ () => logout() }
        >
          Sair
        </button>
      </nav>
    </header>
  );
}
