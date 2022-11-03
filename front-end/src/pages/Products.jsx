import axios from 'axios';
import React, { useEffect } from 'react';
import NavBar from '../components/navbar';
// import ProductCards from '../components/ProductCards';

export default function Products() {
  // const [allProducts, setAllProducts] = useState([]);

  const request = async () => {
    const { data } = await axios.get('http://localhost:3001/customer/products');
    setAllProducts(data);
  };

  useEffect(() => {
    request();
  }, []);

  return (
    <div>
      <NavBar />
    </div>
    // <div>
    //   <NavBar />
    //   <main>
    //     {
    //       allProducts.map((product) => (
    //         <ProductCards
    //           key={ product.id }
    //           id={ product.id }
    //           name={ product.name }
    //           urlImage={ product.urlImage }
    //           price={ product.price }
    //         />))
    //     }
    //   </main>
    // </div>
  );
}
