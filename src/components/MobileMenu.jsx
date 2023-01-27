import React, { useContext } from 'react';
import Link from 'next/link';
import AppContext from '@context/AppContext';
import styles from '@styles/MobileMenu.module.scss';

const MobileMenu = () => {
  const { toggleMobileMenu } = useContext(AppContext);

  return (
    <div className={styles.MobileMenu}>
      <div>
        <ul>
          <li>
            <Link href="/">CATEGORIES</Link>
          </li>
          <li>
            <Link href="/">All</Link>
          </li>
          <li>
            <Link href="/">Clothes</Link>
          </li>
          <li>
            <Link href="/">Electronics</Link>
          </li>
          <li>
            <Link href="/">Furnitures</Link>
          </li>
          <li>
            <Link href="/">Toys</Link>
          </li>
          <li>
            <Link href="/">Others</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="/orders" role="button" tabIndex={0} onClick={() => toggleMobileMenu()} onKeyDown={() => toggleMobileMenu()}>
              My orders
            </Link>
          </li>
          <li>
            <Link href="/account" role="button" tabIndex={0} onClick={() => toggleMobileMenu()} onKeyDown={() => toggleMobileMenu()}>
              My account
            </Link>
          </li>
        </ul>
      </div>
      <ul>
        <li>
          <Link href="/" className={styles.email}>
            email@yardsale.com
          </Link>
        </li>
        <li>
          <Link href="/" className={styles['sign-out']}>
            Sign out
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
