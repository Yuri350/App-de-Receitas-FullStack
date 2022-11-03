import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

export default function SignUp() {
  const { create } = useContext(AuthContext);
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [isError, setIsError] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const navigate = useNavigate();

  const handleChange = ({ target: { value, name } }) => {
    setData((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleCreateUserSubmit = async (event) => {
    event.preventDefault();
    try {
      await create(data);
      navigate('/');
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
  };

  useEffect(() => {
    const isVerify = () => {
      const { email, password, name } = data;
      const emailCheck = email
        .split('').includes('@') && email.split('.').includes('com');
      const MIN_LENGTH = 6;
      const MIN_NAME_LENGTH = 12;
      const valuesChecked = (
        emailCheck
        && password.length >= MIN_LENGTH
        && name.length >= MIN_NAME_LENGTH && name !== ''
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
        <h2>Cadastro</h2>
        <div className="form-group">
          <label htmlFor="name">
            Nome
            <input
              data-testid="common_register__input-name"
              type="text"
              name="name"
              id="name"
              onChange={ handleChange }
              value={ data.name }
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              data-testid="common_register__input-email"
              type="email"
              name="email"
              id="email"
              onChange={ handleChange }
              value={ data.email }
            />
          </label>
          <label htmlFor="password">
            Senha
            <input
              data-testid="common_register__input-password"
              type="password"
              name="password"
              id="password"
              onChange={ handleChange }
              value={ data.password }
            />
          </label>
        </div>
        <button
          data-testid="common_register__button-register"
          type="submit"
          disabled={ isDisabled }
          onClick={ handleCreateUserSubmit }
        >
          CADASTRAR
        </button>
      </div>
      {
        isError
        && (
          <span
            data-testid="common_register__element-invalid_register"
          >
            Nõa foi possível fazer o cadastro
          </span>
        )
      }

    </form>
  );
}
