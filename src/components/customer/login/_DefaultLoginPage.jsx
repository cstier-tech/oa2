import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Body from '../../shared/_Main';
import LoginBoxCard from './_LoginBoxCard';
import Login from './_LoginForm';

function SSOLoginPage({ activePage, onNavClick }) {
    return (
        <Body pageClass="login-page">
            <Row className="mt-4">
                <Col lg={5} className="m-auto">
                    <LoginBoxCard heading={'Sign into (Store Name)'}>
                        <Login />
                        <span className="text-center mt-3 small">
                            Not registered yet? <a href="#" onClick={() => onNavClick("register")}>Register</a>
                        </span>
                    </LoginBoxCard>
                </Col>
            </Row>
        </Body>
    )
}

export default SSOLoginPage;