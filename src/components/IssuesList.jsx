import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Issue from './Issue';

import 'bulma/css/bulma.css';
// import {  } from "bloomer";

class IssuesList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            issues: []
        }
    }
  
    async componentDidMount() {
        const response = await fetch("https://api.github.com/repos/facebook/create-react-app/issues");
        const issues = await response.json();
        // console.log("data is", issues);
        this.setState ({
            issues: issues
        })
    }
  
    render() {
        const { issues } = this.state;

        return (
            <>
            {!!issues.length ? (
                <>
                    <h1>Github Issues List</h1>
                    <Route exact path="/">
                    {issues.map((issue) => {
                        return (
                            <p key={issue.id}>
                                {issue.title}
                                <br/>
                                <Link to={`/issue/${issue.number}`}>View Details</Link>
                            </p>
                        )
                    })}
                    </Route>
                    <Route path={`/issue/:issue_number`}>
                        <Link to="/">Return to Home</Link>
                        <h2>This will be an issue!</h2>
                    </Route>
                </>
            ) : (
                <p>Fetching issues....</p>
            )}
            </>
        );
    }
  }
  
  export default IssuesList;