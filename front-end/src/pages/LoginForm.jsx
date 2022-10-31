// rfce
import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { requestLogin, setToken, requestData } from '../services/requests';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [failedTryLogin, setFailedTryLogin] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const isVerify = (emailv, senha) => {
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const emailTest = emailRegex.test(emailv);
    const MIN_LENGTH = 6;

    if (emailTest && senha.length >= MIN_LENGTH) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    isVerify(email, password);

    try {
      const { token } = await requestLogin('http://localhost:3001/login', { email, password });

      setToken(token);

      const { role } = await requestData('/login/validate', { email, password });

      localStorage.setItem('token', token);
      localStorage.setItem('role', role);

      setIsLogged(true);
    } catch (error) {
      setFailedTryLogin(true);
      setIsLogged(false);
    }
  };

  useEffect(() => {
    setFailedTryLogin(false);
  }, [email, password]);

  if (isLogged) return <Navigate to="/produtos" />;

  return (
    <form onSubmit={ submitHandler }>
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
              onChange={ (e) => setEmail(e.target.value) }
              value={ email }
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="password">
            Senha
            <input
              data-testId="common_login__input-password"
              type="password"
              name="password"
              id="password"
              onChange={ (e) => setPassword(e.target.value) }
              value={ password }
            />
          </label>
        </div>
        <input
          data-testId="common_login__button-login"
          type="submit"
          value="LOGIN"
          isDisabled={ isDisabled }
        />
        <input
          data-testId="common_login__button-register"
          type="button"
          value="Ainda não tenho conta"
          isDisabled={ isDisabled }
        />
      </div>
      {(failedTryLogin)
        ? (
          <p data-testid="common_login__element-invalid-email">
            Email ou senha inválidos
          </p>
        )
        : null}
    </form>
  );
}

export default LoginForm;
