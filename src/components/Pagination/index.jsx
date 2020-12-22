import React from 'react';
import { Container, Pagination, PaginationItem, PaginationLink, Row } from 'reactstrap';
import "./index.scss";

PaginationComponent.defaultProps = {
    onPageChange: null,
}

function PaginationComponent(props) {
    const { currentPage, onPageChange } = props

    function handlePageChange(newPage){
        if (onPageChange){
            onPageChange(newPage);
        }
    }
    
    return (
        <Container className="d-flex flex-row pagination p-0">
            <Pagination aria-label="Page navigation example">
            <PaginationItem disabled={currentPage <= 1}>
                <PaginationLink previous onClick={() => handlePageChange(currentPage - 1)} />
            </PaginationItem>
            <PaginationItem>
                <PaginationLink next onClick={() => handlePageChange(currentPage + 1)}/>
            </PaginationItem>
            </Pagination>
            <Container className="text-right pagination__info p-0">
                Page {currentPage}
            </Container>
        </Container>
    )
}

export default PaginationComponent;