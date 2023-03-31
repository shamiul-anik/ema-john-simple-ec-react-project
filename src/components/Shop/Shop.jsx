import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cartItem, setCartItem] = useState([]);

  // Get Products from API/JSON File
  useEffect( () => {
    fetch('./productsData/products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  }, []);

  // Get Products from Local Storage
  useEffect( () => {
    const storedCart = getShoppingCart();
    console.log(storedCart);
  }, [])

  // Adding Products to the Cart
  const handleAddToCart = (product) => {
    const newItem = [...cartItem, product];
    setCartItem(newItem);
    addToDb(product.id); // adding product to local storage
  };

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