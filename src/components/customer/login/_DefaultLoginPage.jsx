import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Body from '../../shared/_Main';
import LoginBoxCard from './_LoginBoxCard';
import Login from './_LoginForm';

function SSOLoginPage({ onLogin }) {
    return (
        <Body pageClass="login-page">
            <Row className="mt-4">
                <Col lg={5} className="m-auto">
                    <LoginBoxCard heading={'Sign into (Store Name)'}>
                        <Login onLogin={onLogin} />
                        <span className="text-center mt-3 small">
                            Not registered yet? <Link to="/register">Register</Link>
                        </span>
                    </LoginBoxCard>
                </Col>
            </Row>
        </Body>
    )
}

export default SSOLoginPage;