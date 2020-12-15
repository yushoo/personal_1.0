import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
// Pages
import Sandbox from "./pages/Sandbox";
import Landing from "./pages/Landing";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/sandbox">
          <Sandbox />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
