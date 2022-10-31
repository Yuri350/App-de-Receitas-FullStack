import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import rockGlass from './images/rockGlass.svg';
import LoginForm from './pages/LoginForm';

function App() {
  return (
    <div className="App">
      <span className="logo">TRYBE</span>
      <object className="rocksGlass" type="image/svg+xml" data={ rockGlass }>
        Glass
      </object>
      <Routes>
        <Route path="/" element={ <Navigate to="/login" /> } />
        <Route path="/login" element={ <LoginForm /> } />
      </Routes>
    </div>
  );
}

export default App;
