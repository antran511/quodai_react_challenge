import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchIssues, highlightIssue, unhighlightIssue } from '../../actions/issueActions'
import { Container } from 'reactstrap';
import IssueList from '../IssueList/index'
import PaginationComponent from '../Pagination/index'
import { addNewNoti } from '../../actions/notificationActions'

function IssueBoard(){
    const [pagination, setPagination] = useState(1);
    const issueList = useSelector(state => state.issue.issueList);
    const loading = useSelector(state => state.issue.loading);
    const error = useSelector(state => state.issue.error);
    const highlightedId = useSelector(state => state.issue.highlightedId)
    const dispatch = useDispatch();

    function handlePageChange(newPage){
        setPagination(newPage)
    }

    
    const handleIssueHighlight = issue => {
        if (issue.id === highlightedId){
            return Promise.resolve(dispatch(unhighlightIssue()));
        }else{
            return Promise.resolve(dispatch(highlightIssue(issue))).then(() => dispatch(addNewNoti(issue)));
        }
    }
    
    useEffect(() => {
        dispatch(fetchIssues(pagination));
    }, [dispatch, pagination])

    return (
        <Container className="" >
            <Container className="d-flex justify-content-center bg-dark text-white p-3">
                <h2 className="">Github Issues List</h2>
            </Container>
            <IssueList className="d-flex justify-content-center" 
                issueList={issueList} 
                loading={loading} 
                highlightedIssue={highlightedId} 
                error={error}
                onIssueClick={handleIssueHighlight} />
            <PaginationComponent currentPage={pagination} onPageChange={handlePageChange}/>
        </Container>
    )
}

export default IssueBoard