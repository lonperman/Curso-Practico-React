import React, { useContext, useState } from 'react';
import '@styles/Header.scss';
import Menu from './Menu';
import MenuMobile from './MenuMobile';
import MyOrder from '../containers/MyOrder';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import AppContext from '../context/AppContext';
import shoppingCart from '@icons/icon_shopping_cart.svg';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const { 
        state: { cart },
        toggleOrders,
        handleToggleOrder,
        toggleMobile,
        handleToggleMobile
    } = useContext(AppContext);

    const handleToggle = () => {
        setToggle(!toggle);
    }



    return (
        <nav>
            <img src={menu} alt="menu" className="menu" onClick={handleToggleMobile} />
            <div className="navbar-left">
                <img src={logo} alt="logo" className="nav-logo" />
                <ul>
                    <li><a href="/">All</a></li>
                    <li><a href="/">Clothes</a></li>
                    <li><a href="/">Electronics</a></li>
                    <li><a href="/">Furnitures</a></li>
                    <li><a href="/">Toys</a></li>
                    <li><a href="/">Others</a></li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-email" onClick={handleToggle}>You-email@example.com</li>
                    <li className="navbar-shopping-cart" onClick={() => handleToggleOrder(!toggleOrders)}>
                        <img src={shoppingCart} alt="shopping cart" />
                        {cart.length > 0 ? <div>{cart.length}</div> : null}
                    </li>
                </ul>
            </div>
            {toggle ? <Menu /> : ""}
            {toggleOrders ? <MyOrder /> : ""}
            {toggleMobile ? <MenuMobile /> : ""}
        </nav>
    )
}

export default Header