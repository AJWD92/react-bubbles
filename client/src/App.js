import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.scss";

import BubblePage from './components/BubblePage';
import ProtectedRoute from './utils/ProtectedRoute';
import Login from "./components/Login";
import "./styles.scss";

function App() {
  return (  
    <Router>
      <div className="App">
        <Switch>
          <ProtectedRoute path='/bubbles' component={BubblePage} />
          <Route exact path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;