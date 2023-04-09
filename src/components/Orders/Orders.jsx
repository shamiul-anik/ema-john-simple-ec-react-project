import React from 'react';
import Cart from '../Cart/Cart';
import './Orders.css';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Order from '../Order/Order';

const Orders = () => {
  // const navigation = useNavigation()
  // console.log(navigation.state);
  // if(navigation.state === "loading") {
  //   return <div>Loading...</div>
  // }
  const cartItems = useLoaderData();
  
  return (
    <div className="main-container">
      
      <div className="cart-products-container">
        {
          cartItems.map((cartItem) => <Order key={cartItem.id} cartItem={cartItem}></Order>)
        }
      </div>

      <div className="cart-container">
        <Cart cartItem={cartItems}></Cart>
      </div>
    </div>
  );
};

export default Orders;