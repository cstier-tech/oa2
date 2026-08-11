import { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Alert from 'react-bootstrap/Alert';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

import LoginForm from './parts/login/_LoginForm.jsx';
import Header from './parts/global/header/_Header.jsx';
import Body from './parts/global/body/_Body.jsx';
import Footer from './parts/global/footer/_Footer.jsx';


function App() {
  return (
    <div className='page-main'>
      <Header />
      <Body pageClass="login-page">
        <Row className="mt-4">
          <Col lg={5} className="m-auto">
            <Card className="shadow-sm p-3 p-md-4 mb-5 mb-md-0 login-box">
              <div>
                <h3 className="h4 mb-0 text-center">
                  Sign into (Store Name)
                </h3>
                <hr />
                <LoginForm />
              </div>
            </Card>
          </Col>
        </Row>
      </Body>
      <Footer>
        <Footer.Menu title="Information">
          {/* <Footer.Menu.Item href="/privacyinfo" label="Privacy" /> */}
        </Footer.Menu>
        <Footer.Menu title="Service">
          <Footer.Menu.Item href="#" label="Contact Us" />
        </Footer.Menu>
        <Footer.Menu title="Company">
          <Footer.Menu.Item href="#" label="Privacy" />
        </Footer.Menu>
      </Footer>
    </div>
  )
}

export default App
