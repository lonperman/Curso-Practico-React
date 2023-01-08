import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem';
import '@styles/MyOrder.scss';

import icon from "@icons/flechita.svg";
import AppContext from '../context/AppContext';

const MyOrder = () => {
	const { state: { cart }, toggleOrders, handleToggleOrder} = useContext(AppContext);

	const sumTotal = () => {
		const reducer = (accumalator, currentValue) => accumalator + currentValue.price;
		const sum = cart.reduce(reducer, 0)
		return sum;
	}
	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={icon} alt="arrow" onClick={()=> handleToggleOrder(!toggleOrders)} />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				<div className='cart-product-list'>
					{cart.map((product, index) => (
						<OrderItem
							indexValue={index}
							product={product}
							key={`orderItem-${index}`}
						/>
					))}
				</div>
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;