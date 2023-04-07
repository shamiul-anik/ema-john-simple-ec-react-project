import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = ({ product, handleAddToCart }) => {
  // console.log(product);
  const {img, name, price, seller, ratings} = product;

  return (
    <div className="product">
      <img src={img} alt={name} />
      <div className="product-info">
        <div>
          <h6 className="product-name">{name}</h6>
          <p className="product-price">Price: ${price}</p>
        </div>
        <div>
          <p className="product-manufacturer">Manufacturer: {seller}</p>
          <p className="product-rating">Rating: {ratings} Star</p>
        </div>
      </div>
      <button onClick={ () => handleAddToCart(product) } className="btn-add-to-cart" type="button">
        Add to Cart
        <FontAwesomeIcon icon={faCartPlus} beat />
      </button>
    </div>
  );
};

export default Product;