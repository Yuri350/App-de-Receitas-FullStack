/* eslint-disable react/jsx-max-depth */
import { Outlet } from 'react-router-dom';
import { Container, ContentLogo, Content } from './styles';

import logoSvg from '../../assets/logo.svg';

export default function LayoutLoginRegister() {
  return (
    <Container>
      <Content>
        <div>
          <ContentLogo>
            <div>
              <img src={ logoSvg } alt="Logo" />
            </div>
            <h1>Faça seu login na plataforma</h1>
          </ContentLogo>
          <Outlet />
        </div>
      </Content>
    </Container>
  );
}
