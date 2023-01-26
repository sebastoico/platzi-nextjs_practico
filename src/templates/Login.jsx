import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '@styles/Login.scss';

import logo from '@logos/logo_yard_sale.svg';

const Login = () => {
  const form = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // const formData = new FormData(form.current);
    // const data = {
    //   username: formData.get('email'),
    //   password: formData.get('password'),
    // };
  };

  return (
    <div className="Login">
      <div className="Login-container">
        <Image src={logo} alt="logo" className="logo" />

        <form action="/" className="form" ref={form}>
          <label for="email" className="label">
            Email address
            <input type="text" name="email" placeholder="email@yardsale.com" className="input input-email" />
          </label>

          <label for="password" className="label">
            Password
            <input type="password" name="password" placeholder="********" className="input input-password" />
          </label>

          <button type="submit" className="primary-button login-button" onClick={handleSubmit}>
            Log in
          </button>

          <Link href="/">Forgot my password</Link>
        </form>

        <button className="secondary-button signup-button">Sign up</button>
      </div>
    </div>
  );
};

export default Login;
