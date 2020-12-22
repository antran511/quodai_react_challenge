import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchIssues, highlightIssue, unhighlightIssue } from '../actions/issueActions'
import { Container } from 'reactstrap';
import IssueList from '../components/IssueList/index'
import PaginationComponent from '../components/Pagination/index'

MainPage.propTypes = {
};

function MainPage(props){
    const [pagination, setPagination] = useState(1);
    const issueList = useSelector(state => state.issue.issueList);
    const loading = useSelector(state => state.issue.loading);
    const highlightedId = useSelector(state => state.issue.highlightedId)

    function handlePageChange(newPage){
        setPagination(newPage)
    }

    function handleIssueHighlight(issue){
        if (issue.id === highlightedId){
            dispatch(unhighlightIssue())
        }else{
            dispatch(highlightIssue(issue))
        }
    }

    const dispatch = useDispatch();
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
                onIssueClick={handleIssueHighlight} />
            <PaginationComponent currentPage={pagination} onPageChange={handlePageChange}/>
        </Container>
    )
}

export default MainPage