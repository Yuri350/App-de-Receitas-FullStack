import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const useQuantity = (id) => {
  const { cart } = useContext(AuthContext);

  const productCart = cart.find((product) => product.id === id);
  if (productCart) {
    const { quantity } = productCart;
    return { quantity };
  }
  return 0;
};

export default useQuantity;
