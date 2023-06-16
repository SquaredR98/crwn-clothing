import React, { useContext } from 'react';
import Button from '../button/button.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import { CartContext } from '../../contexts/cart.context';
import { useNavigate } from 'react-router-dom';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckout = () => {
    navigate('/checkout');
  }
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {
          cartItems.map(item => <CartItem cartItem={item} key={item.id} />)
        }
      </div>
      <Button onClick={goToCheckout}>CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown