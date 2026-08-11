import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
// import Form from 'react-bootstrap/Form';

import LoginForm from './parts/login/_LoginForm.jsx';

// import ColorCard from './components/ColorCard';


function App() {
  return (
    <>
      <div id="content-wrapper">
        <Container as="section" id="content">
          <Row id="content-body">
            <Col id="content-center" lg={12}>
              <div className="page login-page">

                <div className="page-title">
                  <h1>Sign In</h1>
                </div>
                <Row className="mt-4">
                  <Col lg={5} className="m-auto">

                    <Card className="shadow-sm p-3 p-md-4 mb-5 mb-md-0 login-box">
                      <div>
                        <h3 className="h4 mb-0 d-none d-md-block">
                          Credentials, please.
                        </h3>
                        <hr className="d-none d-md-block"></hr>
                        <LoginForm />
                      </div>
                    </Card>

                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default App
