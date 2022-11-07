import React from 'react';
import PropTypes from 'prop-types';
import useQuantity from '../hooks/useQuantity';

export default function ProductCards({
  product, addCart, decreaseCart }) {
  const { quantity } = useQuantity(product.id);

  const handleAddNewProductCart = () => {
    addCart(product);
  };

  const handleDecreaseProductCart = () => {
    decreaseCart(product.id);
  };

  const { id, name, price, url_image: urlImage } = product;

  return (
    <div>
      <h1>
        R$
        {' '}
        <span data-testid={ `customer_products__element-card-price-${id}` }>
          {price.replace(/\./, ',')}
        </span>
      </h1>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ urlImage }
        alt="Produto"
      />

      <div>
        <p data-testid={ `customer_products__element-card-title-${id}` }>
          { name }
        </p>

        <button
          type="button"
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          onClick={ handleDecreaseProductCart }
        >
          -
        </button>
        <input
          type="number"
          data-testid={ `customer_products__input-card-quantity-${id}` }
          value={ quantity || 0 }
          onChange={ () => {} }
        />

        <button
          type="button"
          data-testid={ `customer_products__button-card-add-item-${id}` }
          onClick={ handleAddNewProductCart }
        >
          +
        </button>
      </div>
    </div>
  );
}

ProductCards.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    url_image: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
  addCart: PropTypes.func.isRequired,
  decreaseCart: PropTypes.func.isRequired,
};
