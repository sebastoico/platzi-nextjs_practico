import React, { useContext } from "react";
import Image from "next/image";
import styles from "@styles/Header.module.scss";
import MobileMenu from "@components/MobileMenu.jsx";
import Menu from "@components/Menu.jsx";
import MyOrder from "@containers/MyOrder";
import AppContext from "@context/AppContext";

import yardSaleLogo from "@logos/logo_yard_sale.svg";
import menuLogo from "@icons/icon_menu.svg";
import shoppingCartLogo from "@icons/icon_shopping_cart_notification.svg";
import shoppingCartNotLogo from "@icons/icon_shopping_cart.svg";

const Header = () => {
  const {state, toggleMenu, toggleOrder, toggleMobileMenu} = useContext(AppContext);

  return (
    <nav className={styles.Nav}>
      <Image src={menuLogo} alt="menu" className={styles.menu} onClick={() => toggleMobileMenu()}/>
      {state.mobileMenuIsOpen && <MobileMenu />}

      <div className={styles['navbar-left']}>
        <Image src={yardSaleLogo} alt="logo" className={styles['nav-logo']} />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furniture</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>

      <div className={styles['navbar-right']}>
        <ul>
          <li className={styles['navbar-email']} onClick={() => toggleMenu()}>
            email@yardsale.com
          </li>
          <li className={styles['navbar-shopping-cart']} onClick={() => toggleOrder()}>
            <Image 
              src={state.cart.length > 0 ? shoppingCartLogo : shoppingCartNotLogo} 
              alt="shopping cart" 
            />
          </li>
        </ul>
      </div>
      {state.menuIsOpen && <Menu/>}
      {state.orderIsOpen && <MyOrder/>}
    </nav>
  );
};

export default Header;
