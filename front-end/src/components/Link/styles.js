import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const LinkContainer = styled(NavLink)`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme['green-700']};
  transition: filter 0.2s ease 0s;
  align-self: flex-start;

  &:hover {
    filter: brightness(0.9);
  }
`;

export default LinkContainer;
