import { createContext, useCallback, useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { requestCreate, signInRequest, requestData } from '../services/authService';

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticate, setIsAuthenticate] = useState(false);

  const KEY_TOKEN = 'token';

  useEffect(() => {
    const getUser = async () => {
      const token = localStorage.getItem(KEY_TOKEN);
      try {
        if (token) {
          const data = await requestData(token);
          setUser(data);
          setIsAuthenticate(!!data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getUser();
  }, []);

  const create = useCallback(async ({ name, email, password }) => {
    const { token } = await requestCreate({ name, email, password });
    console.log(token);
    localStorage.setItem(KEY_TOKEN, token);
    setIsAuthenticate(true);
  }, []);

  const login = useCallback(async ({ email, password }) => {
    const { token } = await signInRequest({ email, password });
    localStorage.setItem(KEY_TOKEN, token);
    setIsAuthenticate(true);
  }, []);

  const logout = useCallback(async () => {
    localStorage.removeItem(KEY_TOKEN);
  }, []);

  const context = useMemo(() => ({
    user,
    create,
    login,
    logout,
    isAuthenticate,
    isLoading,
  }), [create, isAuthenticate, isLoading, login, logout, user]);

  return (
    <AuthContext.Provider
      value={ context }
    >
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
