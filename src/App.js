import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import FinalReport from "./components/Dashboard/FinalReport/FinalReport";
import TmrReport from "./components/Dashboard/TmrReport/TmrReport";
import TerritoryReports from "./components/Dashboard/TerritoryReport/TerritoryReport";
import SummaryReport from "./components/Dashboard/SummaryReport/SummaryReport";

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
        <Route exact path="/dashboard/summaryReports">
          <SummaryReport></SummaryReport>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
