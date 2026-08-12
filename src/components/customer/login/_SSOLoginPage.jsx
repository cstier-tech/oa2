import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Body from '../../shared/_Main.jsx';
import LoginBoxCard from './_LoginBoxCard.jsx';
import { Button } from 'react-bootstrap';
import Login from './_LoginForm.jsx';

function SSOLoginPage({ activePage, onNavClick }) {
    const [mode, setMode] = useState('sso');
    return (
        <Body pageClass="login-page">
            <Row className="mt-4">

                <Col lg={5} className="m-auto">
                    <LoginBoxCard heading={'Sign into (Store Name)'}>
                        {mode === 'sso' &&
                            <>
                                <Button variant='primary' size='lg'>SSO</Button>
                                <span className="text-center mt-3 small">
                                    <a href="#" onClick={(e) => { setMode('admin') }}>Admin Login</a>
                                </span>
                            </>
                        }
                        {mode === 'admin' &&
                            <>
                                <Login />
                                <span className="text-center mt-3 small">
                                    <a href="#" onClick={(e) => { setMode('sso') }}>Log in with SSO</a>
                                </span>
                            </>

                        }
                    </LoginBoxCard>
                </Col>
            </Row>
        </Body>
    )
}

export default SSOLoginPage;