import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import { FaShoppingCart, FaLock } from 'react-icons/fa';
import { Card, Content, Icon, TitleCard, CostCard, ImageCard, ImageHolder, WraperContainer } from './styles';

import { AuthContext } from '../../contexts/AuthContext';

export const updatePrice = (price) => Number(price).toFixed(2).replace('.', ',');

export default function ProductCards({
  product }) {
  const { cart, setCart } = useContext(AuthContext);

  const [quantity, setQuantity] = useState(0);

  function handleCart(totalCart) {
    const cartProduct = cart.find(({ name }) => name === product.name);
    if (!cartProduct) {
      setCart([...cart, { ...product, quantity: totalCart }]);
    } else {
      const updatedProducts = cart.map((updatedProduct) => {
        if (updatedProduct.name === product.name) {
          return { ...updatedProduct, quantity: totalCart };
        }
        return updatedProduct;
      });
      setCart(updatedProducts);
    }
  }

  function removeCartProduct() {
    const removeProducts = cart.filter(({ name }) => name !== product.name);
    setCart(removeProducts);
  }

  const addQuantity = () => {
    setQuantity(quantity + 1);
    handleCart(quantity + 1);
  };

  const removeQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      if (quantity - 1 === 0) {
        removeCartProduct();
      } else {
        handleCart(quantity - 1);
      }
    }
  };

  const handleChange = ({ target }) => {
    setQuantity(target.value);
    if (target.value === 0) {
      removeCartProduct();
    } else {
      handleCart(target.value);
    }
  };

  return (
    <div
      style={ {
        display: 'inline-block',
        flexDirection: 'row',
        alignItems: 'center',
        height: '60vh',
      } }
    >
      <Card>
        <WraperContainer>
          <TitleCard
            data-testid={ `customer_products__element-card-title-${product.id}` }
          >
            {product.name}
          </TitleCard>

          <CostCard data-testid={ `customer_products__element-card-price-${product.id}` }>
            {Number(product.price).toFixed(2).replace('.', ',')}
          </CostCard>
        </WraperContainer>

        <Content>
          <ImageHolder className="img-cards">
            <ImageCard
              data-testid={ `customer_products__img-card-bg-image-${product.id}` }
              src={ product.urlImage }
              alt={ product.name }
            />
          </ImageHolder>
          <button
            data-testid={ `customer_products__button-card-rm-item-${product.id}` }
            type="button"
            onClick={ removeQuantity }
          >
            -
          </button>
          <input
            data-testid={ `customer_products__input-card-quantity-${product.id}` }
            type="number"
            min={ 0 }
            onChange={ handleChange }
            value={ quantity }
          />
          <button
            data-testid={ `customer_products__button-card-add-item-${product.id}` }
            type="button"
            onClick={ addQuantity }
          >
            +
          </button>
        </Content>
      </Card>
    </div>
  );
}

ProductCards.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    urlImage: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
};
