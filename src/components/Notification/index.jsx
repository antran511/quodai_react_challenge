import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'reactstrap';
import { Card, CardSubtitle } from 'reactstrap';
import PropTypes from 'prop-types';

Notification.propTypes = {
    highlightedList: PropTypes.array,
};

Notification.defaultProps = {
    highlightedList: []
}


function Notification(){
    const highlightedList = useSelector(state => state.notification.highlightedList);
    

    return (
       <div>
           <Container className="d-flex justify-content-center bg-dark text-white p-3">
                <h2 className="">Notification</h2>
            </Container>
            <ul className="list-unstyled issue-list">
            {highlightedList.map((issue, index) => (
                <li 
                key={index} 
                >
                <Card className="my-2">
                    <CardSubtitle className="m-2">Issue #{issue.id} was recently highlighted</CardSubtitle>
                </Card>
                </li>
                ))}
            </ul>
       </div>
    )
}

export default Notification