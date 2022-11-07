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
  }, []);

  const isAuthenticate = !!user;

  const addCart = useCallback((newProduct) => {
    const indexProduct = cart.find((product) => product.id === newProduct.id);
    if (indexProduct) {
      const ind = cart.indexOf(indexProduct);
      const arr = cart;
      arr[ind].quantity += 1;
      setCart([...arr]);
    } else {
      setCart((prevState) => [...prevState, { ...newProduct, quantity: 1 }]);
    }
  }, [cart]);

  const decreaseCart = useCallback((id) => {
    const indexProductCart = cart.findIndex((item) => item.id === id);
    const notFoundIndex = -1;

    if (indexProductCart !== notFoundIndex && cart[indexProductCart]?.quantity > 0) {
      const updatedCart = [...cart];
      updatedCart[indexProductCart].quantity -= 1;
      setCart(updatedCart);
    }
  }, [cart]);

  const removeProductCart = (id) => {
    setCart((prevState) => prevState.filter((products) => products.id !== id));
  };

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
      addCart,
      decreaseCart,
      cart,
      removeProductCart,
    }),
    [
      create,
      isAuthenticate,
      login,
      logout,
      user,
      addCart,
      decreaseCart,
      cart,
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
