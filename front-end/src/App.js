import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import './App.css';
import LoginForm from './pages/LoginForm';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Navigate to="/login" /> } />
          <Route path="/login" element={ <LoginForm /> } />
          <Route path="/register" element={ <Register /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
