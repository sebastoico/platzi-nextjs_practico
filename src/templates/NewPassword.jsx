import React from 'react';
import Image from 'next/image';
import '@styles/NewPassword.scss';

import logo from '@logos/logo_yard_sale.svg';

const NewPassword = () => {
  return (
    <div className="NewPassword">
      <div className="NewPassword-container">
        <Image src={logo} alt="logo" className="logo" />

        <h1 className="title">Create a new password</h1>
        <p className="subtitle">Enter a new password for your account</p>

        <form action="/" className="form">
          <label for="password" className="label">
            Password
            <input type="password" id="password" placeholder="********" className="input input-password" />
          </label>

          <label for="new-password" className="label">
            Re-enter password
            <input type="password" id="new-password" placeholder="********" className="input input-password" />
          </label>

          <input type="submit" value="Confirm new password" className="primary-button login-button" />
        </form>
      </div>
    </div>
  );
};

export default NewPassword;
