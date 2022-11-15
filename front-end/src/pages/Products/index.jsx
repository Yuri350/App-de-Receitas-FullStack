import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { FaShoppingCart, FaLock } from 'react-icons/fa';
import { Card, Content, Icon } from './styles';

import ProductCards from '../../components/ProductCard';
import { AuthContext } from '../../contexts/AuthContext';
import requestProducts from '../../services/requestProducts';
import priceFormatter from '../../utils/formatter';

export default function Products() {
  const { cart, totalPrice } = useContext(AuthContext);
  const [allProducts, setAllProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getAllProducts() {
      try {
        const data = await requestProducts();
        setAllProducts(data);
      } catch (error) {
        console.log(error);
      }
    }
    getAllProducts();
  }, []);

  return (
    <main>
      <div>
        {allProducts.map((product) => (
          <ProductCards
            key={ product.id }
            product={ product }
          />))}
      </div>
      <button
        icon={ <FaShoppingCart /> }
        type="button"
        data-testid="customer_products__button-cart"
        disabled={ cart.length === 0 }
        onClick={ () => navigate('/customer/checkout') }
      >
        <p
          data-testid="customer_products__checkout-bottom-value"
        >
          {`Ver carrinho: ${priceFormatter.format(totalPrice)}`}
        </p>
      </button>
    </main>
  );
}
