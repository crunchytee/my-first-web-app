import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Navbar />
      <Login />
    </Router>
  );
}

export default App;
