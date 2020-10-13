import React, { useEffect, useState } from 'react';
import { Route, Link } from 'react-router-dom';
import Issue from './Issue';

import 'bulma/css/bulma.css';
// import {  } from "bloomer";

const IssuesList = props => {
    const [issues, setIssues] = useState([]);

    useEffect(() => {
        (async function() {
            const response = await fetch("https://api.github.com/repos/facebook/create-react-app/issues");
            const issues = await response.json();
            setIssues(issues);
        })();
    }, [setIssues]);

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
                    <Issue issues={issues} />
                </Route>
            </>
        ) : (
            <p>Fetching issues....</p>
        )}
        </>
    );
}
  
export default IssuesList;