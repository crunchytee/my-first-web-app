import { useContext } from "react";
import LoginContext from "../LoginContext";
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const AuthButton = (props) => {
  const { authenticated, setAuthenticated } = useContext(LoginContext);

  if (authenticated) {
    return (
      <div className={props.style}>
        <Link
          to="/"
          onClick={(e) => {
            setAuthenticated(false);
          }}
        >
          Log Out
        </Link>
      </div>
    );
  } else {
    return (
      <div className={props.style}>
        <Link to="/login">Log In</Link>
      </div>
    );
  }
};

export default AuthButton;
