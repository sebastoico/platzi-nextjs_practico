import React, {useContext} from 'react';
import Image from "next/image";
import OrderItem from '@components/OrderItem';
import AppContext from "@context/AppContext";
import styles from '@styles/MyOrder.module.scss';

import flecha from '@icons/flechita.svg';

const MyOrder = () => {
  const {state:{cart}, toggleOrder} = useContext(AppContext);

  const sumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <div className={styles.MyOrder}>
      <div className={styles['title-container']}>
        <Image src={flecha} alt="arrow" onClick={() => toggleOrder()}/>
        <p className={styles.title}>My order</p>
      </div>
    
      <div className={styles['MyOrder-products']}>
        {cart.map((product, index) => (
          <OrderItem product={product} key={`orderItem-${product.id + index}`} indexValue={index}/>
        ))}
      </div>
      
      <div className={styles['MyOrder-bottom']}>
        <div className={styles.order}>
          <p>
            <span>Total</span>
          </p>
          <p>$ {sumTotal()}.00</p>
        </div>
        <button className={styles['primary-button']}>
          Checkout
        </button>
      </div>
    </div>
  );
}

export default MyOrder;