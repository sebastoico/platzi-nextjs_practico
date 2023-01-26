import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '@context/AppContext';

import addToCartLogo from '@icons/bt_add_to_cart.svg';
import addedToCartLogo from '@icons/bt_added_to_cart.svg';

import styles from '@styles/ProductItem.module.scss';

const ProductItem = ({ product }) => {
  const {
    state: { cart },
    addToCart,
    removeFromCart,
  } = useContext(AppContext);

  const isInCart = () => cart.some((item) => item.id === product.id);

  const handleClick = () => {
    isInCart() ? removeFromCart(product) : addToCart(product);
  };

  return (
    <div className={styles.ProductItem}>
      <Image loader={() => product.images[0]} src={product.images[0]} alt={product.title} width={100} height={100} />
      <div className={styles['product-info']}>
        <div>
          <p>$ {product.price}.00</p>
          <p>{product.title}</p>
        </div>
        <div role={'button'} tabIndex={0} onClick={handleClick} onKeyDown={handleClick}>
          <Image src={isInCart() ? addedToCartLogo : addToCartLogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
