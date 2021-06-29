import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard"

function App() {
  return (
<Router>
  <Switch>
    <Route>
      <Dashboard></Dashboard>
    </Route>
  </Switch>
</Router>
  );
}

export default App;
