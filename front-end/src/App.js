import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from './contexts/AuthContext';
import GlobalStyles from './styles/GlobalStyles';

import themes from './styles/themes';
import Router from './routes';

function App() {
  return (
    <ThemeProvider theme={ themes }>
      <BrowserRouter>
        <AuthProvider>
          <Router />
        </AuthProvider>
      </BrowserRouter>
      <GlobalStyles />

    </ThemeProvider>
  );
}

export default App;
