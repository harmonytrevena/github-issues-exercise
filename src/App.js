import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import IssuesList from './components/IssuesList';
import Issue from './components/Issue'

import 'bulma/css/bulma.css';
// import {  } from "bloomer";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route path="/" exact component={IssuesList}/>
            <Route path="/:issue_number">
              <IssuesList />
            </Route>
            <Route path="*">
              <h2>Page Not Found!</h2>
              <Link to="/">Return to Homepage</Link>
            </Route>
        </Switch>
      </Router> 
    </div>
  );
}

export default App;
