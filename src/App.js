import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/"></Route>
      </Switch>
    </Router>
  );
}

export default App;
