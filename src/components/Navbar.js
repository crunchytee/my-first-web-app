import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import CryptoAuth from '../Auth/CryptoAuth';

const Navbar = () => {
  return (
    <nav className="flex flex-row w-screen h-20 bg-white border-b-2 border-gray-400 justify-between">
      <Link to="/" className="m-6 text-lg hover:text-button">
        <em>my</em>
        <b>Website</b>
      </Link>
      <div>
        <div className="btn-header">
          <Link to="/">Home</Link>
        </div>
        {/* <AuthButton className="btn-header" /> */}
        <CryptoAuth className="btn-header" />
      </div>
    </nav>
  );
};

export default Navbar;
