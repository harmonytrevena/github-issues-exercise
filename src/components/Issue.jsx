import React from "react";

const Issue = (props) => {
    const { issue } = props;
    return (
        <>
            <h2>{issue.title}</h2>
            <p>{issue.body}</p>
            <p>
                <a href={issue.url}>{issue.url}</a>
            </p>
        </>
    );
}
export default Issue;