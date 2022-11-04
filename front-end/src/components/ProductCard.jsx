import React, { useState } from 'react';

export default function ProductCards(product) {
  const [counter, setCounter] = useState(0);
  const { id, name, urlimage: urlImage, price } = product;

  const handlerValue = ({ target: { value } }) => {
    const isZero = value > 0;
    setCounter(isZero ? value : 0);
  };

  return (
    <div>
      <h1 data-testid={ `customer_products__element-card-price-${id}` }>
        {`R$ ${price}`}
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
          onClick={ () => setCounter(counter - 1) }
        >
          -
        </button>
        <input
          type="number"
          data-testid={ `customer_products__input-card-quantity-${id}` }
          value={ counter }
          onChange={ (e) => handlerValue(e) }
        />
        <button
          type="button"
          data-testid={ `customer_products__button-card-add-item-${id}` }
          onClick={ () => setCounter(counter + 1) }
        >
          +
        </button>
      </div>
    </div>
  );
}
