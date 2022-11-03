import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './contexts/AuthContext';
import Router from './routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Router />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
