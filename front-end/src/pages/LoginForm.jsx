// rfce
import React, { useState, useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { requestLogin } from '../services/requests';
import DeliveryContext from '../provider/DeliveryContext';

function LoginForm() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    tokenVerified,
    setTokenVerified,
  } = useContext(DeliveryContext);
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

  const submitHandler = async () => {
    const request = await requestLogin({ email, password });
    console.log(request);
    const { token } = request;
    setTokenVerified(token);
    const { role } = tokenVerified;
    localStorage.setItem('token', token);
    localStorage.setItem('role', role);
    setIsLogged(true);
    if (!request) {
      setFailedTryLogin(true);
      setIsLogged(false);
    }
  };

  useEffect(() => {
    isVerify(email, password);
  }, [email, password]);

  if (isLogged) return <Navigate to="/produtos" />;

  return (
    <form>
      <div className="form-inner">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">
            Login
            <input
              data-testid="common_login__input-email"
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
              data-testid="common_login__input-password"
              type="password"
              name="password"
              id="password"
              onChange={ (e) => setPassword(e.target.value) }
              value={ password }
            />
          </label>
        </div>
        <button
          data-testid="common_login__button-login"
          type="button"
          disabled={ isDisabled }
          onClick={ () => { submitHandler(); } }
        >
          LOGIN
        </button>
        <button
          data-testid="common_login__button-register"
          type="button"
        >
          Ainda não tenho conta
        </button>
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
