import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faListCheck } from '@fortawesome/free-solid-svg-icons';
import './Shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cartItem, setCartItem] = useState([]);

  useEffect( () => {
    fetch('./productsData/products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  }, []);

  // Adding Products to the Cart
  const handleAddToCart = (product) => {
    const newItem = [...cartItem, product];
    setCartItem(newItem);
  }

  return (
    <div className="shop-container">
      <div className="products-container">
        { products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>) }
      </div>
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
    </div>
  );
};

export default Shop;