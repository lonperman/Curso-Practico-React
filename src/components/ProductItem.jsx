import React, { useContext, useState } from 'react';
import '@styles/ProductItem.scss';
import AppContext from '../context/AppContext';

import iconBtAddCart from "@icons/bt_add_to_cart.svg";
import iconBtAddedCart from "@icons/bt_added_to_cart.svg"

const ProductItem = ({ product }) => {

	const { addToCart, removeFromCart, state: {cart}} = useContext(AppContext)

	const handleClick = item => {
		itsProductAdded() ? removeFromCart(item) : addToCart(item);
	}

	const itsProductAdded = () => cart.some( item => item.id === product.id) ? true : false;

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)}>
					{
						itsProductAdded() ? (
							<img src={iconBtAddedCart} alt="" />
						): (
							<img src={iconBtAddCart} alt="" />
						)
					}
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;