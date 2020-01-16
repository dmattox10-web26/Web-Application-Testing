import React from 'react';
import { Row, Col } from 'reactstrap'
import './CSS/Styles.css'
import Dashboard from './components/Dashboard';
import Display from './components/Display';

function App() {
  return (
    <div className="App">
      <div className='spacer'></div>
      <Row>
        <Col xs='1'></Col>
        <Col xs='4'>
          <Dashboard />
        </Col>
        <Col xs='2'></Col>
        <Col xs='4'>
          <Display />
        </Col>
        <Col xs='1'></Col>
      </Row>
    </div>
  );
}

export default App;
