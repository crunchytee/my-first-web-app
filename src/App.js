import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <Navbar />
      {/* <Login /> */}
      <Dashboard />
    </Router>
  );
}

export default App;
