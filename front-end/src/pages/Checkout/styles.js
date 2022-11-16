import styled, { css } from 'styled-components';

export const ContentInput = styled.section`
  display: flex;
  display: grid;
  grid-auto-flow: row;
  gap: 0.625rem;
  margin-bottom: 0.5rem;
`;

export const Select = styled.select`
  width: 100%;
  height: 30px;
  margin-bottom: 0.5rem;
  margin-left: 0;
  background: #121214;
  color: gray;
  padding-left: 30px;
  font-size: 14px;
  border: none;
  
  option {
    color: black;
    background: #121214;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export const ButtonContainer = styled.button`
  width: 75%;
  align-self: center;
  margin: 0.50rem;
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
      background: ${theme['green-300']};
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

export const RemoveButtonContainer = styled.button`
  width: 75%;
  align-self: center;
  margin: 0.50rem;
  gap: 0.625rem;
  height: 30px;
  border-radius: 5px;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1rem;
  color: white;
  transition: all 0.2s ease 0s, color 0.2s ease 0s;
  cursor: pointer;

  ${({ theme, styles }) => styles === 'PRIMARY'
    && css`
      background: ${theme['red-300']};
    `}

  ${({ theme, types }) => types === 'SECONDARY'
    && css`
      background: ${theme['grey-700']};
    `}

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }

  svg {
    width: 20px;
    height: 20px;
    transition: all 0.2s ease 0s;
    color: ${({ theme }) => theme['red-300']};
  }
`;

export const Table = styled.table`
  width: 100%;
  border-spacing: 0.5 0.5rem;
  margin-top: 0.75rem;

  th {
    color: ${({ theme }) => theme['gray-300']};
    font-weight: 400;
    padding: 0.25rem 0.75rem;
    text-align: left;
    line-height: 0.5rem;
  }

  td {
    padding: 0rem 0.5rem;
    border: 0;
    background: ${({ theme }) => theme['gray-800']};
    color: ${({ theme }) => theme['gray-300']};
    border-radius: 0.25rem;
  
    &:first-child {
      color: ${({ theme }) => theme['gray-300']};
    }

    &.deposit {

      color: ${({ theme }) => theme['green-300']};

      &:first-child {
        color: ${({ theme }) => theme['green-300']};
      }
    }

    &.withdraw {

      color: ${({ theme }) => theme['red-300']};

      &:first-child {
        color: ${({ theme }) => theme['red-300']};
      }
    }

    &.total {
      font-weight: 300;
    }
  }
`;

export const Paragraph = styled.p`
  color: ${({ theme }) => theme['gray-300']};
  font-weight: 400;
  padding: 1rem 2rem;
  text-align: right;
  line-height: 1.5rem;
`;
