import React from 'react'
import { Jumbotron, Row, Col, Button } from 'reactstrap'

const Dashboard = (props) => {
    return (
        <Jumbotron>
            <Row style={{textAlign: 'center'}}>
                <Col xs='3'>
                    <Button onClick={ props.strike }>Strike</Button>
                </Col>
                <Col xs='3'>
                    <Button onClick={ props.ball }>Ball</Button>
                </Col>
                <Col xs='3'>
                    <Button onClick={ props.foul }>Foul</Button>
                </Col>
                <Col xs='3'>
                    <Button onClick={ props.hit }>Hit</Button>
                </Col>
           </Row>
        </Jumbotron>
    )
}

export default Dashboard