import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faListCheck } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';

const Cart = ({cartItem}) => {

  // Calculating Total Price and Total Shipping Charge
  let totalQuantity = 0;
  let totalPrice = 0;
  let totalShippingCharge = 0;

  for (const product of cartItem) {
    product.quantity = product.quantity || 1; // if product.quantity = 0, then set product.quantity = 1. Otherwise it won't show the correct result as default quantity could be 0
    totalQuantity += product.quantity;
    totalPrice += (product.price * product.quantity);
    totalShippingCharge += (product.shipping * product.quantity);
  }

  // Calculating Total Tax
  const totalTax = ((totalPrice * 5)/100);
  
  // Calculating Grand Total
  const grandTotal = totalPrice + totalShippingCharge + totalTax;

  return (
    <div className="cart-container">
      <h5 className="order-summary">Order Summary</h5>
      <div className="order-details">
        <p>Selected Items: {totalQuantity}</p>
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