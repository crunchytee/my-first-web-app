import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-row w-screen h-20">
      <li className="m-6">
        <Link to="/">Home</Link>
      </li>
      <li className="m-6">
        <Link to="/login">Log In</Link>
      </li>
    </div>
  );
};

export default Navbar;
