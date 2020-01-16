import React from 'react'
import { Jumbotron, Row, Col } from 'reactstrap'

const Display = (props) => {
    const { balls, strikes } = props
    return (
        <Jumbotron>
            <Row>
                <Col xs='1'></Col>
                <Col xs='4'>
                    <h4>Balls:</h4>
                    <div className='display'>
                        { balls }
                    </div>
                </Col>
                <Col xs='2'></Col>
                <Col xs='4'>
                    <h4>Strikes:</h4>
                    <div className='display'>
                        { strikes }
                    </div>
                </Col>
                <Col xs='1'></Col>
            </Row>
        </Jumbotron>
    )
}

export default Display