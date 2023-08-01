import React, { useContext } from 'react';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { CartContext } from '../../contexts/cart.context';
import { useNavigate } from 'react-router-dom';
import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckout = () => {
    navigate('/checkout');
  }
  return (
    <CartDropdownContainer>
      <CartItems>
        {
          cartItems.length ? cartItems.map(item => <CartItem cartItem={item} key={item.id} />) : (
            <EmptyMessage>Your cart is empty</EmptyMessage>
          )
        }
      </CartItems>
      { cartItems.length > 0 && <Button onClick={goToCheckout}>CHECKOUT</Button>}
    </CartDropdownContainer>
  )
}

export default CartDropdown