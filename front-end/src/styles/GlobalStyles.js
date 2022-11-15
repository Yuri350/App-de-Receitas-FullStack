import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']};
  }
  
  a {
    text-decoration: none;
  }

  body {
    background-color: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-100']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem Poppins, sans-serif
  }

  input, textarea {
    outline: 0px;
    background: ${({ theme }) => theme['gray-900']};;
    border: 2px solid ${({ theme }) => theme['gray-700']};
    border-radius: 5px;
    height: 50px;
    padding: 15px 21px;
    color: ${({ theme }) => theme.white};
    font-size: 17px;
    width: 100%;
    transition: border 0.2s ease 0s;
  }

  button {
    outline: none;
    border: none;
  }

`;

export default GlobalStyles;
