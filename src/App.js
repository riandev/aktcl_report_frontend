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
import TmrReport from './components/Dashboard/TmrReport/TmrReport';
import TerritoryReports from './components/Dashboard/TerritoryReport/TerritoryReport';

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
    <Route exact path="/dashboard/tmrReport">
      <TmrReport></TmrReport>
    </Route>
    <Route exact path="/dashboard/territoryReports">
      <TerritoryReports></TerritoryReports>
    </Route>
  </Switch>
</Router>
  );
}

export default App;
