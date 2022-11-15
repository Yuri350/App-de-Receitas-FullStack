import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PriceFormater from '../../utils/formatter';
import getSellers from '../../services/requestSellers';
import purchaseRequest from '../../services/sale';
import { AuthContext } from '../../contexts/AuthContext';

import Title from '../../components/Title';
import Input from '../../components/Input';
import Form from '../../components/Form';

import {
  ContentInput,
  Select,
  ButtonContainer,
  RemoveButtonContainer,
  Table,
  Paragraph,
} from './styles';

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
      <Title styles="PRIMARY" title="Finalizar Pedido" />
      <div>
        <Table>
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
                  <RemoveButtonContainer
                    type="button"
                    onClick={ () => removeCartProduct(item.id) }
                    styles="PRIMARY"
                    title="Remover"
                  >
                    Remover
                  </RemoveButtonContainer>
                </td>
              </tr>
            ))
          }
        </Table>
        <div>
          <Paragraph
            data-testid="customer_checkout__element-order-total-price"
          >
            { `Total: ${PriceFormater.format(totalPrice)}` }
          </Paragraph>
        </div>
      </div>
      <Title styles="PRIMARY" title="Detalhes e Endereço" />
      <Form>
        Vendedor Responsável:
        <Select
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
        </Select>
        <ContentInput>
          Endereço:
          <Input
            type="text"
            name="endereço"
            placeholder="Endereço:"
            onChange={ handleChange }
            data-testid="customer_checkout__input-address"
          />
        </ContentInput>
        <ContentInput>
          Número:
          <Input
            type="text"
            name="numero"
            placeholder="Número:"
            onChange={ handleChange }
            data-testid="customer_checkout__input-address-number"
          />
        </ContentInput>
        <ButtonContainer
          type="button"
          onClick={ finishPurchase }
          data-testid="customer_checkout__button-submit-order"
          types="PRIMARY"
          title="Finalizar Pedido"
        >
          Finalizar Pedido
        </ButtonContainer>
        {
          adressError && <p>Por favor, preencha todos os campos</p>
        }
      </Form>
    </div>
  );
}

export default Checkout;
