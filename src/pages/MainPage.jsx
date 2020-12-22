import React from 'react';
import IssueBoard from '../components/IssueBoard/index';
import Notification from '../components/Notification/index'
import { Container, Row, Col } from 'reactstrap'


function MainPage(){    
    return (
    <Container>
        <Row>
            <Col xs="8">
                <IssueBoard></IssueBoard>
            </Col>
            <Col>
                <Notification />
            </Col>
        </Row>
        
        </Container>
    )
}

export default MainPage