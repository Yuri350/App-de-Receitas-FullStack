import styled, { css } from 'styled-components';

const ButtonContainer = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
  height: 50px;
  border-radius: 5px;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1rem;
  color: ${({ theme }) => theme.white};
  transition: all 0.2s ease 0s, color 0.2s ease 0s;
  cursor: pointer;

  ${({ theme, types }) => types === 'PRIMARY'
    && css`
      background: ${theme['green-300']};
    `}

  ${({ theme, types }) => types === 'SECONDARY'
    && css`
      background: ${theme['gray-700']};
    `}

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  svg {
    width: 20px;
    height: 20px;
    transition: all 0.2s ease 0s;
    color: ${({ theme }) => theme['green-300']};
  }
`;

export default ButtonContainer;
