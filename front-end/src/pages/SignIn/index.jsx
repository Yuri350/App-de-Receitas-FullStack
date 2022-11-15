import { useState, useContext, useEffect } from 'react';

import { FaUserAlt, FaLock } from 'react-icons/fa';
import { AiFillGoogleCircle } from 'react-icons/ai';

import { AuthContext } from '../../contexts/AuthContext';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Form from '../../components/Form';
import Link from '../../components/Link';

import {
  ContentAfterBefore,
  ContentButton,
  ContentInput,
  ContentLink,
  ContentSigInWithGoogle,
} from './styles';

export default function SignIn() {
  const { login } = useContext(AuthContext);
  const [data, SetData] = useState({
    email: '',
    password: '',
  });
  const [isDisabled, setIsDisabled] = useState(true);
  const [isError, setIsError] = useState(false);

  const handleChangeLogin = ({ target: { value, name } }) => {
    SetData((prevState) => ({ ...prevState, [name]: value }));
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      await login(data);
    } catch (error) {
      setIsError(true);
    }
  };

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
    <Form onSubmit={ submitHandler }>
      <ContentInput>
        <Input
          placeholder="E-mail"
          data-testid="common_login__input-email"
          type="email"
          name="email"
          id="email"
          onChange={ handleChangeLogin }
          value={ data.email }
          icon={ <FaUserAlt /> }
        />
        <Input
          icon={ <FaLock /> }
          placeholder="Senha"
          data-testid="common_login__input-password"
          type="password"
          name="password"
          id="password"
          onChange={ handleChangeLogin }
          value={ data.password }
        />
      </ContentInput>
      <Link to="/">Esqueci minha senha</Link>
      <ContentButton>
        <Button
          types="PRIMARY"
          title="Login"
          data-testid="common_login__button-login"
          type="submit"
          disabled={ isDisabled }
        />
      </ContentButton>
      <ContentLink>
        <span>Não tem uma conta?&nbsp;</span>
        <Link
          to="/register"
          data-testid="common_login__button-register"
        >
          Register-se
        </Link>
      </ContentLink>
      <ContentAfterBefore />
      <ContentSigInWithGoogle>
        <p>Ou entre com</p>
        <Button
          title="Google"
          types="SECONDARY"
          icon={ <AiFillGoogleCircle /> }
        />
      </ContentSigInWithGoogle>
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
    </Form>
  );
}
