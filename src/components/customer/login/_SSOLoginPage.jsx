import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Body from '../../shared/_Main.jsx';
import LoginBoxCard from './_LoginBoxCard.jsx';
import { Button } from 'react-bootstrap';
import Login from './_LoginForm.jsx';
function SSOLoginPage({ onLogin }) {
    const [mode, setMode] = useState('sso');
    const navigate = useNavigate();

    // Same simulated-login pattern as _LoginForm.jsx's "Log In" button - the "SSO" button
    // here has no form behind it, so it just flips the flag and navigates directly.
    const handleSsoLogin = () => {
        onLogin();
        navigate('/');
    };

    return (
        <Body pageClass="login-page">
            <Row className="mt-4">

                <Col lg={5} className="m-auto">
                    <LoginBoxCard heading={'Sign into (Store Name)'}>
                        {mode === 'sso' &&
                            <>
                                <Button variant='primary' size='lg' onClick={handleSsoLogin}>SSO</Button>
                                <span className="text-center mt-3 small">
                                    <a href="#" onClick={(e) => { setMode('admin') }}>Admin Login</a>
                                </span>
                            </>
                        }
                        {mode === 'admin' &&
                            <>
                                <Login onLogin={onLogin} />
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