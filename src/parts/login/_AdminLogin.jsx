import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

function AdminLogin({ onSSOLogin }) {
    return (
        <>
            <Form.Group className="form-group">
                <InputGroup size='lg' className='has-icon'>
                    <Form.Control placeholder="Email" type="email" id="Email" className="email" data-gtm-form-interact-field-id="0" />
                    <span className="input-group-icon text-muted">
                        <FontAwesomeIcon icon={faHeart} />
                    </span>
                </InputGroup>
            </Form.Group>

            <Form.Group className="form-group">
                <InputGroup size='lg' className='has-icon'>
                    <Form.Control placeholder="Password" type="password" id="Password" className="password" data-gtm-form-interact-field-id="1" />
                    <span className="input-group-icon text-muted">
                        <FontAwesomeIcon icon={faHeart} />
                    </span>
                </InputGroup>
            </Form.Group>

            <div className='form-group d-flex justify-content-between'>
                <Form.Check
                    type="checkbox"
                    id="RememberMe"
                    name="RememberMe" type="checkbox" value="true" data-gtm-form-interact-field-id="2"
                    label={`Remember Me?`}
                />
                <div className="forgot-password">
                    <a href="#">Forgot password?</a>
                </div>
            </div>

            <Button variant="primary" size="lg" type="submit" className="btn-block">
                Log In
            </Button>
            <div className="sso-login text-center mt-3">
                <a href="#" onClick={(e) => { e.preventDefault(); onSSOLogin(); }}>Log in with SSO</a>
            </div>
        </>
    )
}

AdminLogin.propTypes = {
    onSSOLogin: PropTypes.func.isRequired,
};

export default AdminLogin;