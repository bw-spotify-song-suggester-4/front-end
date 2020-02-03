import React from 'react';
import Login from './components/Login';
import Register from './components/Register';
import PrivateRoute from "./components/PrivateRoute.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Dashboard} from "./components/Dashboard"

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <PrivateRoute exact path = "/private" component={Dashboard}/>
          <Route path= "/login" component={Login} />
          <Route path= "/" component={Register} />
        </Switch>
      </div>
    </Router>
  );
  }

export default App;
