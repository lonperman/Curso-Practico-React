import React, { useContext } from 'react'
import '@styles/MenuMobile.scss'
import close from '@icons/icon_close.png'
import AppContext from '../context/AppContext'

function MenuMobile() {
  const {toggleMobile,handleToggleMobile} = useContext(AppContext);

  return (
    <div className="mobile-menu">
      <img src={close} alt="close menu" className="close" onClick={() => handleToggleMobile(!toggleMobile)} />
      <div>
        <ul>
          <li><a href="/">CATEGORIES</a></li>
          <li><a href="/">All</a></li>
          <li><a href="/">Cloth</a></li>
          <li><a href="/">Electronics</a></li>
          <li><a href="/">Furniture</a></li>
          <li><a href="/">Toys</a></li>
          <li><a href="/">Others</a></li>
        </ul>
        <ul>
          <li><a href="/">My orders</a></li>
          <li><a href="/">My Account</a></li>
        </ul>
      </div>
      <ul>
        <li><a href="/" className="email">You-email@example.com</a></li>
        <li><a href="/" className="sign-out">Sign out</a></li>
      </ul>
    </div>
  )
}

export default MenuMobile;