import React, {useContext} from 'react';
import Image from "next/image";
import styles from '@styles/OrderItem.module.scss';
import AppContext from "@context/AppContext";

import cerrar from '@icons/icon_close.png';

const OrderItem = ({product}) => {
  const {removeFromCart} = useContext(AppContext);

  return (
    <div className={styles.OrderItem}>
      <figure>
        <Image loader={() => product?.images[0]} src={product?.images[0]} alt={product?.title} width={100} height={100}/>
      </figure>
      <p>{product?.title}</p>
      <p>$ {product?.price}.00</p>
      <Image src={cerrar} alt="close" onClick={() => removeFromCart(product)}/>
    </div>
  );
}

export default OrderItem;