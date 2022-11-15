import styled from 'styled-components';

export const Container = styled.main`
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  padding: 2rem;
  margin: 0 auto;

  > div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    padding: 28px 0px 50px;
  }

  @media (max-width: 960px) {
    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
    }
  }

`;

export const ContentLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 100%;
  max-width: 480px;

  h1 {
    margin-bottom: 24px;
    font-size: 54px;
    line-height: 64px;
  }

  img {
    object-fit: contain;
  }
`;
