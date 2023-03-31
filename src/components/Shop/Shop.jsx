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

  // Get Added Products from Local Storage
  useEffect( () => {
    const storedCart = getShoppingCart(); // getting stored product's id from local storage
    const savedCart = [];
    // Looping through all the id's of stored cart to get the related product from the API/JSON file.
    for(const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id); // finding the products with matched id
      if(addedProduct) {
        const quantity = storedCart[id]; // It indicates the stored quantity of products in local storage. 
        addedProduct.quantity = quantity; // Using the previous information of quantity in local storage addedProduct's quantity also updated.
        savedCart.push(addedProduct);
      }
    }
    setCartItem(savedCart);

  }, [products]); // adding products as dependency

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