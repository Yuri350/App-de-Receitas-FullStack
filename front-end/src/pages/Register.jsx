import { useState } from 'react';

export default function Register() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = ({ target: { value, name } }) => {
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

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
