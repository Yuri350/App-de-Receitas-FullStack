import styled, { css } from 'styled-components';

export const gradient = degs => css`
  background:
    linear-gradient(
      ${degs || 130}deg,
      #00dbde 0%,
      #fc00ff 100%
    )
`;

export const Card = styled.div`
  height: '60vh',
  position: relative;
  overflow: hidden;
  width: 300px;
  padding: 3rem 0 2rem;
  margin: 20px;
  border-radius: 0.5rem;
  ${gradient()};
  box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.025),
      0 9px 46px 8px rgba(0, 0, 0, 0.025),
      0 11px 15px -7px rgba(0, 0, 0, 0.025);
`;

export const Content = styled.div`
      position: relative;
      z-index: 3;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
`;

export const OrderNumber = styled.div`
      font-size: 3rem;
      color: rgb(255,250,250)
`;

export const ListItem = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 0.325rem;
      color: rgb(52, 52, 52);
`;
