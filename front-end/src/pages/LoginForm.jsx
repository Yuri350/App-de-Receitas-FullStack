import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { requestLogin, setToken, requestData } from '../services/requests';

function LoginForm() {
  const [userValue, setUserValue] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = ({ target: { value, name } }) => {
    setUserValue((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleOpenRegister = () => navigate('/register');

  return (
    <form>
      <div className="form-inner">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">
            Login
            <input
              data-testId="common_login__input-email"
              type="email"
              name="email"
              id="email"
              onChange={ handleChange }
              value={ userValue.email }
            />
          </label>
          <label htmlFor="password">
            Senha
            <input
              data-testId="common_login__input-password"
              type="password"
              name="password"
              id="password"
              onChange={ handleChange }
              value={ userValue.password }
            />
          </label>
        </div>
        <button
          data-testId="common_login__button-login"
          type="submit"
        >
          LOGIN
        </button>
        <button
          data-testId="common_login__button-register"
          type="button"
          onClick={ handleOpenRegister }
        >
          Ainda não tenho conta
        </button>
      </div>
      {/* {(failedTryLogin)
        ? (
          <p data-testid="common_login__element-invalid-email">
            Email ou senha inválidos
          </p>
        )
        : null} */}
    </form>
  );
}

export default LoginForm;
