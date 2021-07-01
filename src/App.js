import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard"
import FinalReport from './components/Dashboard/FinalReport/FinalReport';

function App() {
  return (
<Router>
  <Switch>
    <Route exact path="/">
      <Dashboard></Dashboard>
    </Route>
    <Route exact path="/dashboard/report">
      <FinalReport></FinalReport>
    </Route>
  </Switch>
</Router>
  );
}

export default App;
