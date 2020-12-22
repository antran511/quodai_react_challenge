import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchIssues } from '../actions/issueActions'
import { Container } from 'reactstrap';
import IssueList from '../components/IssueList/index'
import PaginationComponent from '../components/Pagination/index'

MainPage.propTypes = {
};

function MainPage(props){
    const [pagination, setPagination] = useState(1);
    const issueList = useSelector(state => state.issue.issueList);
    const loading = useSelector(state => state.issue.loading);

    function handlePageChange(newPage){
        setPagination(newPage)
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
            <IssueList className="d-flex justify-content-center" issueList={issueList} loading={loading}/>
            <PaginationComponent currentPage={pagination} onPageChange={handlePageChange}/>
        </Container>
    )
}

export default MainPage