import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="flex flex-row w-screen h-20 bg-white border-b-2 border-gray-400 justify-between">
      <div className="m-6 text-lg">myWebsite</div>
      <ul>
        <div className=" btn-header">
          <Link to="/">Home</Link>
        </div>
        <div className=" btn-header">
          <Link to="/login">Log In</Link>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
