import React, { Component } from 'react';
import Issue from './Issue';

class IssuesList extends Component {
    constructor(props) {
        super(props);
        this.state = { issues: []}
    }
  
    async componentDidMount() {
        const response = await fetch("https://api.github.com/repos/facebook/create-react-app/issues");
        const issues = await response.json();
        console.log("data is", issues);
        this.setState ({
            issues: issues
        })
    }
  
    render() {
        const { issues } = this.state;

        return (
            <>
                {issues.map((issue, index) =>
                    <ul key={index}>
                        <li>{issue.title}</li>
                        <li>{issue.body}</li>
                        <li><a href={issue.url} target="_blank" rel="noopener noreferrer">{issue.url}</a></li>
                    </ul>
                )}
            </>
        );
    }
  }
  
  export default IssuesList;