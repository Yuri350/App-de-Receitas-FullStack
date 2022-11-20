import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const ButtonCard = styled.button`
      font-size: 200%;
      display: flex;
      flex: 0 0 auto;
      align-items: center;
      margin: 0 0 20px 40%;
      height: 40px;
      padding: 0 2rem;
      border: 0;
      border-radius: 20px;
      color:rgba(0, 0, 0, 0.85);
      font-weight: bold;
      text-transform: uppercase;
      font-size: 1rem;
      color: ${({ theme }) => theme.black};
      
      ${({ theme, types }) => types === 'PRIMARY'
    && css`
      background: ${theme['green-300']};
    `}

      box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.025);
      transition: background 0.25s;

      &:hover { background: rgba(255, 255, 255, 1);}
`;
