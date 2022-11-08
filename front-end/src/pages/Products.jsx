import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCards from '../components/ProductCard';
import { AuthContext } from '../contexts/AuthContext';
import requestProducts from '../services/requestProducts';
import priceFormatter from '../utils/formatter';

export default function Products() {
<<<<<<< HEAD
  const [user, setUser] = useState('');
  console.log(user);

  const [allProducts, setAllProducts] = useState([]); // preciso na pagina de productDetails (nao subi pro contexto)
=======
  const { cart, totalPrice } = useContext(AuthContext);
  const [allProducts, setAllProducts] = useState([]);
  const navigate = useNavigate();
>>>>>>> origin/fernando-main-group-6-checkout

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
