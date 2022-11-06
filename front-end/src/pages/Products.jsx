import React, { useState, useEffect } from 'react';
import NavBar from '../components/navbar';
import ProductCards from '../components/ProductCard';
import requestProducts from '../services/requestProducts';

export default function Products() {
  const [user, setUser] = useState('');
  console.log(user);

  const [allProducts, setAllProducts] = useState([]); // preciso na pagina de productDetails (nao subi pro contexto)

  useEffect(() => {
    const userData = localStorage.getItem('users');
    const tokenData = JSON.parse(userData);

    setUser(tokenData);
    async function getAllProducts() {
      try {
        const data = await requestProducts();
        setAllProducts(data);
      } catch (error) {
        console.log(error);
      }
    }
    getAllProducts();
    console.log('---->', allProducts);
  }, []);

  return (
    <div>
      <NavBar />
      <main>
        {
          allProducts.map((product) => (
            <ProductCards
              key={ product.id }
              id={ product.id }
              name={ product.name }
              urlImage={ product.urlImage }
              price={ product.price }
            />))
        }
      </main>
    </div>
  );
}
