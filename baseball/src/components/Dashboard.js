import React from 'react'
import { Jumbotron, Row, Col, Button } from 'reactstrap'

const Dashboard = (props) => {
    return (
        <Jumbotron>
            <Row style={{textAlign: 'center'}}>
                <Col xs='3'>
                    <Button onClick={ props.strike } data-testid='strikeButton'>Strike</Button>
                </Col>
                <Col xs='3'>
                    <Button onClick={ props.ball } data-testid='ballButton'>Ball</Button>
                </Col>
                <Col xs='3'>
                    <Button onClick={ props.foul } data-testid='foulButton'>Foul</Button>
                </Col>
                <Col xs='3'>
                    <Button onClick={ props.hit } data-testid='hitButton'>Hit</Button>
                </Col>
           </Row>
        </Jumbotron>
    )
}

export default Dashboard