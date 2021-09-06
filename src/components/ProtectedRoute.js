import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import LoginContext from "../LoginContext";

function ProtectedRoute({ component: Component, ...rest }) {
  const { authenticated } = useContext(LoginContext);
  return (
    <Route
      {...rest}
      render={(props) => {
        return authenticated ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
}

export default ProtectedRoute;
