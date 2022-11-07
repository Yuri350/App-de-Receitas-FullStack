import { createContext, useCallback, useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { requestCreate, signInRequest } from '../services/authService';

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const KEY_TOKEN = 'user';
  const KEY_CART = 'cart';

  const [user, setUser] = useState(() => {
    const userLocalStorage = localStorage.getItem(KEY_TOKEN);
    if (userLocalStorage) {
      return JSON.parse(userLocalStorage);
    }
    return null;
  });

  const [cart, setCart] = useState(() => {
    const cartLocalStorage = localStorage.getItem(KEY_CART);
    if (cartLocalStorage) {
      return JSON.parse(cartLocalStorage);
    } if (!cartLocalStorage) return [];
  });

  const create = useCallback(async ({ name, email, password, role }) => {
    const userData = await requestCreate({ name, email, password, role });
    setUser(userData);
    localStorage.setItem(KEY_TOKEN, JSON.stringify(userData));
  }, []);

  const login = useCallback(async ({ email, password }) => {
    const userData = await signInRequest({ email, password });
    setUser(userData);
    localStorage.setItem(KEY_TOKEN, JSON.stringify(userData));
  }, []);

  const logout = useCallback(async () => {
    setUser(null);
    localStorage.removeItem(KEY_TOKEN);
    localStorage.removeItem(KEY_CART);
  }, []);

  const isAuthenticate = !!user;

  const totalPrice = cart.reduce((acc, product) => {
    const price = Number(product.price) * Number(product.quantity);
    return acc + price;
  }, 0);

  useEffect(() => {
    if (cart) {
      localStorage.setItem(KEY_CART, JSON.stringify(cart));
    }
  }, [cart]);

  const context = useMemo(
    () => ({
      create,
      login,
      logout,
      isAuthenticate,
      user,
      cart,
      setCart,
      totalPrice,
    }),
    [
      create,
      isAuthenticate,
      login,
      logout,
      user,
      cart,
      setCart,
      totalPrice,
    ],
  );

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
