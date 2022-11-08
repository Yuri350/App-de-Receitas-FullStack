import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PriceFormater from '../utils/formatter';
import getSellers from '../services/requestSellers';
import purchaseRequest from '../services/sale';
import { AuthContext } from '../contexts/AuthContext';

function Checkout() {
  const [sellers, setSellers] = useState([]);
  const [info, setInfo] = useState({
    vendedor: 2,
    endereço: '',
    numero: 0,
  });
  const { cart, setCart, totalPrice } = useContext(AuthContext);
  const [adressError, setAdressError] = useState(false);
  const navigate = useNavigate();

  const sellersRequest = async () => {
    const data = await getSellers();
    setSellers(data);
  };

  useEffect(() => {
    sellersRequest();
  }, []);

  const handleChange = (e) => {
    setInfo((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const removeCartProduct = (id) => {
    const removeProducts = cart.filter((product) => id !== product.id);
    setCart(removeProducts);
  };

  const finishPurchase = async () => {
    const { endereço, numero, vendedor } = info;
    if (vendedor !== 0 && endereço !== '' && numero !== 0) {
      const data = {
        info,
        products: cart,
        total: totalPrice,
      };
      const { token } = JSON.parse(localStorage.getItem('user'));
      const id = await purchaseRequest(data, token);
      navigate(`/customer/orders/${id}`);
      setCart([]);
    } else {
      setAdressError(true);
    }
  };

  return (
    <div>
      <h1>
        Finalizar Pedido
      </h1>
      <div>
        <table>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Subtotal</th>
            <th>Remover Item</th>
          </tr>
          {
            cart.map((item, index) => (
              <tr key={ index }>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-item-number-${index}`
                  }
                >
                  { index + 1 }
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-name-${index}`
                  }
                >
                  { item.name }
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-quantity-${index}`
                  }
                >
                  { item.quantity }
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-unit-price-${index}`
                  }
                >
                  { PriceFormater.format(item.price) }
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-sub-total-${index}`
                  }
                >
                  { PriceFormater.format(item.price * item.quantity) }
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-remove-${index}`
                  }
                >
                  <button
                    type="button"
                    onClick={ () => removeCartProduct(item.id) }
                  >
                    Remover
                  </button>
                </td>
              </tr>
            ))
          }
        </table>
        <div>
          <p
            data-testid="customer_checkout__element-order-total-price"
          >
            { `Total: ${PriceFormater.format(totalPrice)}` }
          </p>
        </div>
      </div>
      <h1>
        Detalhes e Endereço para Entrega
      </h1>
      <form>
        <label htmlFor="P. Vendedora Responsável:">
          P. Vendedora Responsável:
          <select
            name="vendedor"
            onChange={ handleChange }
            data-testid="customer_checkout__select-seller"
          >
            {
              sellers.map((seller) => (
                <option
                  selected
                  key={ seller.id }
                  value={ seller.id }
                >
                  { seller.name }
                </option>
              ))
            }
          </select>
        </label>
        <label htmlFor="Endereço:">
          Endereço:
          <input
            type="text"
            name="endereço"
            placeholder="Endereço:"
            onChange={ handleChange }
            data-testid="customer_checkout__input-address"
          />
        </label>
        <label htmlFor="Número:">
          Número:
          <input
            type="text"
            name="numero"
            placeholder="Número:"
            onChange={ handleChange }
            data-testid="customer_checkout__input-address-number"
          />
        </label>
      </form>
      <button
        type="button"
        onClick={ finishPurchase }
        data-testid="customer_checkout__button-submit-order"
      >
        Finalizar Pedido
      </button>
      {
        adressError && <p>Por favor, preencha todos os campos</p>
      }
    </div>
  );
}

export default Checkout;
