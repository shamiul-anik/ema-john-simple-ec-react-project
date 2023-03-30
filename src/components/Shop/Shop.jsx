import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';
import Cart from '../Cart/Cart';

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
      <Cart cartItem={cartItem}></Cart>
    </div>
  );
};

export default Shop;