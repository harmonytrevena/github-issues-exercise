import React, { useEffect, useState } from 'react';
import { Route, Link } from 'react-router-dom';
import Issue from './Issue';

import { Container, Box, Title } from "bloomer";
import 'bulma/css/bulma.css';


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
        <Container isFluid style={{ marginTop: 20, marginBottom: 20 }}>
        {!!issues.length ? (
            <>
                <Title isSize={2} tag="h1">
                    Github Issues List
                </Title>
                <Route exact path="/">
                    <Box>
                    {issues.map((issue) => {
                        return (
                            <>
                                <p key={issue.id}>
                                    {issue.title}
                                </p>
                                <p>
                                    <Link to={`/issue/${issue.number}`}>View Details</Link>
                                </p>
                                <br/>
                            </>
                        )
                    })}
                    </Box>
                </Route>
                <Route path={`/issue/:issue_number`}>
                    <Box>
                        <Link to="/">Return to Home</Link>
                        <Issue issues={issues} />
                    </Box>
                </Route>
            </>
        ) : (
            <p>Fetching issues....</p>
        )}
        </Container>
    );
}
  
export default IssuesList;