import React from "react";
import './App.css'
import Login from "./components/Login";
import Register from "./components/Register";
import PrivateRoute from "./components/PrivateRoute.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import NavMenu from "./components/NavMenu";
import Search from "./components/Search";
import TestSearch from './components/TestSearch';
import TestResultCard from './components/TestResultCard'

function App() {
  return (
    <Router>
      <NavMenu />
      <div className="App">
        <Switch>
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/search" component={Search} />
          <PrivateRoute exact path="/testsearch" component={TestSearch} />
          <PrivateRoute path="/results" component={TestResultCard}/>
          {/* <PrivateRoute exact path="/editfavorites/:id" component={EditFavorites} /> */}
          <Route path="/login" component={Login} />
          <Route path="/" component={Register} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
