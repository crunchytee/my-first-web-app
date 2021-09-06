import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Welcome from "./components/Welcome";
import React, { useState } from "react";
import LoginContext from "./LoginContext";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  return (
    <LoginContext.Provider value={{ authenticated, setAuthenticated }}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Welcome />
          </Route>
        </Switch>
      </Router>
    </LoginContext.Provider>
  );
}

export default App;
