import React from 'react';
import Link from 'next/link';
import styles from '@styles/MyAccount.module.scss';

const account = () => {
  return (
    <div className={styles.MyAccount}>
      <div className={styles['MyAccount-container']}>
        <h1 className={styles.title}>My account</h1>
        <form action="/" className={styles.form}>
          <div>
            <p for="name" className={styles.label}>
              Name
            </p>
            <p className={styles.value}>Name</p>
            <p for="email" className={styles.label}>
              Email address
            </p>
            <p className={styles.value}>email@yardsale.com</p>
            <p for="password" className={styles.label}>
              Password
            </p>
            <p className={styles.value}>********</p>
          </div>
        </form>
        <Link href="/">
          <input type="submit" value="Edit" className={styles['secondary-button']} />
        </Link>
      </div>
    </div>
  );
};

export default account;
