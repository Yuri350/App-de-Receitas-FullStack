import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import {
  requestAdminCreate,
  requestGetAllUsers,
  requestRemoveUser,
} from '../services/authService';

export default function Admin() {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'customer',
  });
  const [isDisabled, setIsDisabled] = useState(true);
  const [isError, setIsError] = useState(false);
  const [allUsers, setAllUsers] = useState([]);

  const handleChange = ({ target: { value, name } }) => {
    setData((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await requestAdminCreate(data, user.token);
      setIsError(false);
    } catch (err) {
      console.error(err);
      setIsError(true);
    }
  };

  const handleRemoveUser = async (id) => {
    await requestRemoveUser(id);
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

  useEffect(() => {
    const getAllUsers = async () => {
      const users = await requestGetAllUsers();
      setAllUsers(users);
    };
    getAllUsers();
  }, []);

  return (
    <main>
      <form onSubmit={ handleSubmit }>
        <h1>Cadastrar novo usuário</h1>
        <div>
          <label htmlFor="name">
            Nome
            <input
              data-testid="admin_manage__input-name"
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
              data-testid="admin_manage__input-email"
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
              data-testid="admin_manage__input-password"
              type="password"
              name="password"
              id="password"
              onChange={ handleChange }
              value={ data.password }
            />
          </label>
        </div>
        <select
          onChange={ handleChange }
          value={ data.role }
          name="role"
          data-testid="admin_manage__select-role"
        >
          <option value="customer">Cliente</option>
          <option value="seller">Vendedor</option>
          <option value="administrator">Administrador</option>
        </select>
        <button
          data-testid="admin_manage__button-register"
          type="submit"
          disabled={ isDisabled }
        >
          CADASTRAR
        </button>
        {isError && (
          <span data-testid="admin_manage__element-invalid-register">
            Usuário ja cadastrado
          </span>
        )}
      </form>
      <table>
        <thead>
          <tr>
            <th>item</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Tipo</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map((item, index) => (
            <tr key={ item.id }>
              <td
                data-testid={ `admin_manage__element-user-table-item-number-${index}` }
              >
                {index + 1 }
              </td>
              <td
                data-testid={ `admin_manage__element-user-table-name-${index}` }
              >
                {item.name}
              </td>
              <td
                data-testid={ `admin_manage__element-user-table-email-${index}` }
              >
                {item.email}
              </td>
              <td
                data-testid={ `admin_manage__element-user-table-role-${index}` }
              >
                {item.role}
              </td>
              <td>
                <button
                  type="button"
                  data-testid={ `admin_manage__element-user-table-remove-${index}` }
                  onClick={ () => handleRemoveUser(item.id) }
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
