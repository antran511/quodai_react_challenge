import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardSubtitle } from 'reactstrap';
import "./index.scss"

IssueList.propTypes = {
    issueList: PropTypes.array,
    loading: PropTypes.bool,
};

IssueList.defaultProps = {
    issueList: [],
    loading: true,
    error: null,
    onIssueClick: null
}

function IssueList(props) { 
    const { issueList, loading, error, highlightedIssue, onIssueClick } = props;
    const handleClick = (issue) => {
        if (onIssueClick){
            onIssueClick(issue);
        }
    }

    return loading ? (
        <h2>Loading</h2>
        ) : error ? (
        <h2>{error}</h2>
        ) : (
        <ul className="list-unstyled issue-list">
            {issueList.map(issue => (
                <li 
                key={issue.id} 
                className={issue.id === highlightedIssue ? 'active' : ''}
                onClick={() => handleClick(issue)}>
                <Card className="my-2">
                    <CardTitle tag="h5" className="m-2">{issue.title}</CardTitle>
                    <CardSubtitle tag="h6" className="m-2">#{issue.id}</CardSubtitle>
                </Card>
                </li>
                ))}
        </ul>
        );
  }
export default IssueList;
