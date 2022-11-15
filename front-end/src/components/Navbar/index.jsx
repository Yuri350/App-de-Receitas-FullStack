import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

import { ContentLink, LinkContainer, ButtonContainer, Container } from './styles';

export default function NavBar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <header>
      <Container>
        <ContentLink>
          {
            user.role === 'seller' && (
              <LinkContainer to="/seller/orders">Pedidos</LinkContainer>
            )
          }

          {
            user.role === 'customer' && (
              <>
                <LinkContainer to="/customer/products">Produtos</LinkContainer>
                <LinkContainer to="/customer/orders">Meus Pedidos</LinkContainer>
              </>
            )
          }
          <LinkContainer to="/user">{user?.name}</LinkContainer>
          <ButtonContainer
            data-testid="customer_products__element-navbar-link-logout"
            type="button"
            onClick={ () => logout() }
            types="PRIMARY"
            title="Sair"
          >
            Sair
          </ButtonContainer>
        </ContentLink>
      </Container>
    </header>
  );
}
