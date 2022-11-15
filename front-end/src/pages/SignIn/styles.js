import styled from 'styled-components';

export const ContentInput = styled.section`
  display: flex;
  display: grid;
  grid-auto-flow: row;
  gap: 0.625rem;
  margin-bottom: 0.5rem;
`;

export const ContentButton = styled.div`
  margin-top: 1.5rem;
`;

export const ContentLink = styled.div`
  text-align: center;
  margin-top: 1.5rem;
  align-items: center;
`;

export const ContentAfterBefore = styled.div`
  position: relative;
  font-size: 12px;
  color: ${({ theme }) => theme['gray-300']};
  margin: 24px 0;
  text-align: center;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    width: calc(50% - 25px);
    height: 1px;
    background: rgb(40, 39, 47);
  }

  &:before {
    left: 0px;
  }

  &::after {
    right: 0px;
  }
`;

export const ContentSigInWithGoogle = styled.div`
  display: flex;

  p {
    font-size: 14px;
    white-space: nowrap;
    margin-right: 24px;
    align-self: center;
  }
`;
