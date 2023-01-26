import React, {useContext} from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from "@context/AppContext";
import styles from '@styles/Checkout.module.scss';

const Checkout = () => {
  const {state:{cart}, toggleMenu, toggleOrder, toggleMobileMenu} = useContext(AppContext);

  const sumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <div className={styles.Checkout}>
      <div className={styles['Checkout-container']}>
        <h1 className={styles.title}>My order</h1>
        <div className={styles['Checkout-content']}>
          <div className={styles.order}>
            <p>
              <span>04.25.2021</span>
              <span>{cart.length} articles</span>
            </p>
            <p>$ {sumTotal()}.00</p>
          </div>
          {cart.map((product, index) => (
            <OrderItem product={product} key={`orderItem-${product.id + index}`} indexValue={index}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Checkout;