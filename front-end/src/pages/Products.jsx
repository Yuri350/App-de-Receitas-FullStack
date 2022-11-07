import React, { useState, useEffect, useContext } from 'react';
import NavBar from '../components/navbar';
import ProductCards from '../components/ProductCard';
import { AuthContext } from '../contexts/AuthContext';
import requestProducts from '../services/requestProducts';

import styles from './styles/products.module.css';

export default function Products() {
  const { addCart, decreaseCart } = useContext(AuthContext);
  const [allProducts, setAllProducts] = useState([]);

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
    <div>
      <NavBar />
      <main className={ styles.container }>
        {
          allProducts.map((product) => (
            <ProductCards
              key={ product.id }
              product={ product }
              addCart={ addCart }
              decreaseCart={ decreaseCart }
            />))
        }
      </main>
    </div>
  );
}
