import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

export default function SignUp() {
  const { create } = useContext(AuthContext);
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = ({ target: { value, name } }) => {
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleCreateUserSubmit = async (event) => {
    event.preventDefault();
    try {
      await create(user);
      navigate('/');
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
  };

  return (
    <form onSubmit={ handleCreateUserSubmit }>
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
              value={ user.name }
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
              value={ user.email }
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
              value={ user.password }
            />
          </label>
        </div>
        <button
          data-testid="common_register__button-register"
          type="submit"

        >
          CADASTRAR
        </button>
      </div>
    </form>
  );
}
