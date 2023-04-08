import React from 'react';
import Cart from '../Cart/Cart';
import './Order.css';
import { useLoaderData } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Orders = () => {
  const cartItems = useLoaderData();
  const { img, name, price, shipping } = cartItems[0];
  // console.log(cartItems[0].img);

  return (
    <div className="orders main-container">
      <div className="cart-products-container">
        <div className="cart-product-img">
          <img src={img} alt={name} />
        </div>
        <div className="cart-items-info">
          <h6 className="cart-product-title">Ultraboost 22 Shoes</h6>
          <p className="cart-product-price">Price: <span className="text-orange">$190</span></p>
          <p className="cart-product-shipping-charge">Shipping Charge : <span className="text-orange">$5</span> </p>
        </div>
        <div className="remove-btn">
          <button type="button">
            <FontAwesomeIcon className="delete-icon" icon={faTrashAlt} fade />
          </button>
        </div>
      </div>
      <div className="cart-container">
        <Cart cartItem={cartItems}></Cart>
      </div>
    </div>
  );
};

export default Orders;