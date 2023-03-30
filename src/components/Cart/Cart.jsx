import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faListCheck } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';

const Cart = ({cartItem}) => {
  return (
    <div className="cart-container">
      
      <h5 className="order-summary">Order Summary</h5>
      <div className="order-info">
        <p>Selected Items: {cartItem.length}</p>
        <p>Total Price: $</p>
        <p>Total Shipping Charge: $</p>
        <p>Tax: $</p>
        <h6>Grand Total: $</h6>
      </div>
      <div className="order-button-container">
        <button className="btn-clear-cart">
          Clear Cart
          <FontAwesomeIcon icon={faTrashCan} beatFade />
        </button>
        <button className="btn-review-order">
          Review Order
          <FontAwesomeIcon icon={faListCheck} bounce />
        </button>
      </div>
    </div>
  );
};

export default Cart;