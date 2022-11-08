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
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const handleChangeLogin = ({ target: { value, name } }) => {
    SetData((prevState) => ({ ...prevState, [name]: value }));
  };

  const submitHandler = async () => {
    try {
      await login(data);
    } catch (error) {
      setIsError(true);
    }
  };

  const handleOpenScreenRegister = () => navigate('/register');

  useEffect(() => {
    const isVerify = () => {
      const { email, password } = data;
      const emailCheck = email
        .split('').includes('@') && email.split('.').includes('com');
      const MIN_LENGTH = 6;
      const valuesChecked = (
        emailCheck
        && password.length >= MIN_LENGTH
      );

      if (valuesChecked) {
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
      {
        isError
        && (
          <span
            data-testid="common_login__element-invalid-email"
          >
            Nõa foi possível fazer o cadastro
          </span>
        )
      }
    </form>
  );
}

export default SignIn;
