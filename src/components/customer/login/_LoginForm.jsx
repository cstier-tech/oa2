import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';


function Login({}) {
    return (
        <Form>
            <Form.Group className="form-group">
                <InputGroup size='lg' className='has-icon'>
                    <Form.Control placeholder="Email" type="email" id="Email" className="email" data-gtm-form-interact-field-id="0" />
                    <span className="input-group-icon text-muted">
                        <i className='icm icm-user'></i>
                    </span>
                </InputGroup>
            </Form.Group>
            <Form.Group className="form-group">
                <InputGroup size='lg' className='has-icon'>
                    <Form.Control placeholder="Password" type="password" id="Password" className="password" data-gtm-form-interact-field-id="1" />
                    <span className="input-group-icon text-muted">
                        <i className='icm icm-shield'></i>
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
            <Button variant="primary" size="lg" type='button' className="btn-block">
                Log In
            </Button>
        </Form>
    )
}

export default Login;