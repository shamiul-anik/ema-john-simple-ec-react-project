import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
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
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
              <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
            </svg>
          </button>
          <button className="btn-review-order">
            Review Order
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-view-list" viewBox="0 0 16 16">
              <path d="M3 4.5h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H3zM1 2a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 2zm0 12a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 14z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;