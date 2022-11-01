import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

function SignIn() {
  const { login } = useContext(AuthContext);
  const [data, SetData] = useState({
    email: '',
    password: '',
  });
  const [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();

  const handleChangeLogin = ({ target: { value, name } }) => {
    SetData((prevState) => ({ ...prevState, [name]: value }));
  };

  const submitHandler = async () => {
    await login(data);
    navigate('/');
  };

  const handleOpenScreenRegister = () => navigate('/register');

  useEffect(() => {
    const isVerify = () => {
      const { email, password } = data;
      const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
      const emailTest = emailRegex.test(email);
      const MIN_LENGTH = 6;

      if (emailTest && password.length >= MIN_LENGTH) {
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
      }
    };
    isVerify();
  }, [data]);

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
              onChange={ handleChangeLogin }
              value={ data.email }
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
              onChange={ handleChangeLogin }
              value={ data.password }
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
          onClick={ handleOpenScreenRegister }
        >
          Ainda não tenho conta
        </button>
      </div>
    </form>
  );
}

export default SignIn;
