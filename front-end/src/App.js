import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import LoginForm from './pages/LoginForm';
import DeliveryContextProvider from './provider/DeliveryContextProvider';

function App() {
  return (
    <div className="App">
      <DeliveryContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <Navigate to="/login" /> } />
            <Route path="/login" element={ <LoginForm /> } />
          </Routes>
        </BrowserRouter>
      </DeliveryContextProvider>
    </div>
  );
}

export default App;
