import React from 'react';
import styles from '@styles/MobileMenu.module.scss';

const MobileMenu = () => {
  return (
    <div className={styles.MobileMenu}>
      <div>

        <ul>
          <li>
            <a href="/">CATEGORIES</a>
          </li>
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
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
    
        <ul>
          <li>
            <a href="/">My orders</a>
          </li>
          <li>
            <a href="/">My account</a>
          </li>
        </ul>
      </div>
      <ul>
        <li>
          <a href="/" className="email">email@yardsale.com</a>
        </li>
        <li>
          <a href="/" className="sign-out">Sign out</a>
        </li>
      </ul>
    </div>
  );
}

export default MobileMenu;