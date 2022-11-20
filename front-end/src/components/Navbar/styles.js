import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme['gray-800']};
  width: 100%;
`;

export const ContentLink = styled.div`
  width: 100%;
  text-align: left;
  align-items: left;
  height: 50px;
  display: flex; 
  align-items: center;
`;

export const LinkContainer = styled(NavLink)`
  width: 100%;
  font-size: 14px;
  font-weight: 600;
  margin-left: 0.50rem;
  color: ${({ theme }) => theme['green-300']};
  transition: filter 0.2s ease 0s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const ButtonContainer = styled.button`
  width: 15%;
  margin-left: 0.50rem;
  margin-right: 0.50rem;
  gap: 0.625rem;
  height: 30px;
  border-radius: 5px;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1rem;
  color: ${({ theme }) => theme.white};
  transition: all 0.2s ease 0s, color 0.2s ease 0s;
  cursor: pointer;

  ${({ theme, types }) => types === 'PRIMARY'
    && css`
      background: ${theme['green-700']};
    `}

  ${({ theme, types }) => types === 'SECONDARY'
    && css`
      background: ${theme['gray-700']};
    `}

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }

  svg {
    width: 20px;
    height: 20px;
    transition: all 0.2s ease 0s;
    color: ${({ theme }) => theme['green-300']};
  }
`;

export default ButtonContainer;
