// rfce
import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { requestLogin, setToken, requestData } from '../services/requests';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [failedTryLogin, setFailedTryLogin] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const submitHandler = async (e) => {
    e.preventDefault();

    isVerify(email, password);

    try {
      const { token } = await requestLogin('/login', { email, password });

      setToken(token);

      const { role } = await requestData('/login/validate', { email, password });

      localStorage.setItem('token',  token);
      localStorage.setItem('role',  role);

      setIsLogged(true);
    } catch (error) {
      setFailedTryLogin(true);
      setIsLogged(false);
    }
  }

  const isVerify = (email, senha) => {
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const emailTest = emailRegex.test(email);
    const MIN_LENGTH = 6;

    if (emailTest && senha.length >= MIN_LENGTH) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
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
          <label htmlFor="email">Login</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={e =>
              setEmail({ email: e.target.value }) } value={ details.email } />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            id="password" onChange={e =>
              setPassword({ password: e.target.value }) } value={ details.password } />
        </div>
        <input
          type="submit"
          value="LOGIN"
          isDisabled={ isDisabled } />
      </div>
      {(failedTryLogin)
        ? (
          <p data-testid="common_login__element-invalid-email">
            {
              `Email ou senha inválidos`
            }
          </p>
          )
        : null}
    </form>>
  )
}

export default LoginForm;
