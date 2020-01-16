import React, { useState } from 'react';
import { Row, Col } from 'reactstrap'
import './CSS/Styles.css'
import Dashboard from './components/Dashboard';
import Display from './components/Display';

function App() {
  const [balls, updateBalls] = useState(0)
  const [strikes, updateStrikes] = useState(0)

  const strike = () => {
    if (strikes === 3) {
      updateBalls(0)
      updateStrikes(0)
    }
    else {
      updateStrikes(strikes => strikes + 1)
    }
  }

  const ball = () => {
    if (balls === 4) {
      updateBalls(0)
      updateStrikes(0)
    }
    else {
      updateBalls(balls => balls + 1)
    }
  }

  const foul = () => {
    if (strikes === 0) {
      updateStrikes(strikes => strikes + 1)
    }
    else if (strikes === 1) {
      updateStrikes(strikes => strikes + 1)
    }
    else {
      return
    }
  }

  const hit = () => {
    updateBalls(0)
    updateStrikes(0)
  }

  return (
    <div className="App">
      <div className='spacer'></div>
      <Row>
        <Col xs='1'></Col>
        <Col xs='4'>
          <Dashboard strike={ strike } ball={ ball } foul={ foul } hit={ hit } />
        </Col>
        <Col xs='2'></Col>
        <Col xs='4'>
          <Display balls={ balls } strikes={ strikes } />
        </Col>
        <Col xs='1'></Col>
      </Row>
    </div>
  );
}

export default App;
