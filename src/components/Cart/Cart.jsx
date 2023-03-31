import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faListCheck } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';

const Cart = ({cartItem}) => {

  // Calculating Total Price and Total Shipping Charge
  let totalPrice = 0;
  let totalShippingCharge = 0;
  for (const product of cartItem) {
    totalPrice += product.price;
    totalShippingCharge += product.shipping;
  }

  // Calculating Total Tax
  const totalTax = ((totalPrice * 5)/100);
  
  // Calculating Grand Total
  const grandTotal = totalPrice + totalShippingCharge + totalTax;

  return (
    <div className="cart-container">
      <h5 className="order-summary">Order Summary</h5>
      <div className="order-details">
        <p>Selected Items: {cartItem.length}</p>
        <p>Total Price: ${totalPrice}</p>
        <p>Total Shipping Charge: ${totalShippingCharge}</p>
        <p>Tax: ${totalTax.toFixed(2)}</p>
        <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
      </div>
      <div className="order-button-container">
        <button className="btn-clear-cart" type="button">
          Clear Cart
          <FontAwesomeIcon icon={faTrashCan} beatFade />
        </button>
        <button className="btn-review-order" type="button">
          Review Order
          <FontAwesomeIcon icon={faListCheck} bounce />
        </button>
      </div>
    </div>
  );
};

export default Cart;