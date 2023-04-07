import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import { toast } from 'react-toastify';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cartItem, setCartItem] = useState([]);

  // Get Products from API/JSON File
  useEffect( () => {
    fetch('./productsData/products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  }, []);

  // Get Added Products from Local Storage and Set them to Show in the Cart
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
    let newCart = [];
    const exists = cartItem.find((pd) => pd.id === product.id); // checking if the added product already exists in the cart or not
    if(!exists) {
      product.quantity = 1; // set initial quantity to 1, if the added product doesn't exist in the cart
      newCart = [...cartItem, product]; // add the new product in the array
    }
    else {
      exists.quantity += 1; // if the product already exist in the cart, then increase and set the product quantity by 1 (previous quantity + 1)
      const remaining = cartItem.filter((pd) => pd.id !== product.id); // get the remaining products in the cart by checking the id's those doesn't match with the matched product id
      newCart = [...remaining, exists]; // update the cart
    }
    setCartItem(newCart); // set cart item
    addToDb(product.id); // adding product to local storage

    // Added Product to Cart Toast
    toast.success('Product added successfully!');
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