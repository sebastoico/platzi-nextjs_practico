import React from 'react';
import '@styles/MyAccount.scss';

const MyAccount = () => {
  return (
    <div className="MyAccount">
      <div className="MyAccount-container">
        <h1 className="title">My account</h1>
        <form action="/" className="form">
          <div>
            <p for="name" className="label">
              Name
            </p>
            <p className="value">Name</p>
            <p for="email" className="label">
              Email address
            </p>
            <p className="value">email@yardsale.com</p>
            <p for="password" className="label">
              Password
            </p>
            <p className="value">********</p>
          </div>
        </form>
        <input type="submit" value="Edit" className="secondary-button edit-button" />
      </div>
    </div>
  );
};

export default MyAccount;
