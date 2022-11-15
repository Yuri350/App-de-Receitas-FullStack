import { useEffect, useState, useContext } from 'react';

import { MdEmail } from 'react-icons/md';
import { FaUserAlt, FaLock } from 'react-icons/fa';

import { AuthContext } from '../../contexts/AuthContext';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Form from '../../components/Form';
import Link from '../../components/Link';
import Title from '../../components/Title';

import { ContentInput, ContentLink } from './styles';

export default function SignUp() {
  const { create } = useContext(AuthContext);
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [isError, setIsError] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleChange = ({ target: { value, name } }) => {
    setData((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleCreateUserSubmit = async (event) => {
    event.preventDefault();
    try {
      await create(data);
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
    <Form onSubmit={ handleCreateUserSubmit }>
      <Title styles="PRIMARY" title="Crie sua conta" />
      <ContentInput>
        <Input
          data-testid="common_register__input-name"
          type="text"
          name="name"
          id="name"
          onChange={ handleChange }
          value={ data.name }
          placeholder="Exemplo: Maria da Silva"
          icon={ <FaUserAlt /> }
        />
        <Input
          data-testid="common_register__input-email"
          type="email"
          name="email"
          id="email"
          onChange={ handleChange }
          value={ data.email }
          placeholder="Exemplo: exemplo@exemplo.com.br"
          icon={ <MdEmail /> }
        />
        <Input
          data-testid="common_register__input-password"
          type="password"
          name="password"
          id="password"
          onChange={ handleChange }
          value={ data.password }
          placeholder="No mínimo 6 caracteres"
          icon={ <FaLock /> }
        />
      </ContentInput>
      <Button
        data-testid="common_register__button-register"
        type="submit"
        disabled={ isDisabled }
        onClick={ handleCreateUserSubmit }
        types="PRIMARY"
        title="Cadastrar"
      />
      <ContentLink>
        <Link to="/login">Já tenho uma conta</Link>
      </ContentLink>
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
    </Form>
  );
}
