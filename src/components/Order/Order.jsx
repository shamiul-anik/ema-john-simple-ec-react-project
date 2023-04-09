import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Order = ({ cartItem }) => {
	
	const { img, name, price, shipping } = cartItem;

	return (
		<div className="cart-product">
			<div className="cart-product-img">
				<img src={img} alt={name} />
			</div>
			<div className="cart-items-info">
				<h6 className="cart-product-title">{name}</h6>
				<p className="cart-product-price">Price: <span className="text-orange">${price}</span></p>
				<p className="cart-product-shipping-charge">Shipping Charge : <span className="text-orange">${shipping}</span> </p>
			</div>
			<div className="remove-btn">
				<button type="button">
					<FontAwesomeIcon className="delete-icon" icon={faTrashAlt} fade />
				</button>
			</div>
		</div>
	);
};

export default Order;