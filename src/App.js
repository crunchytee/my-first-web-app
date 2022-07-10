import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        {/* <ProtectedRoute /> */}
        <Route path="/signup"></Route>
      </Switch>
    </Router>
  );
}

export default App;
