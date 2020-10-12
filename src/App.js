import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import IssuesList from './components/IssuesList';


import './App.css';

function App() {
  return (
    <div className="App">
      <IssuesList />
    </div>
  );
}

export default App;
