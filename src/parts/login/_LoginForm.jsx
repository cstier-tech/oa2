import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function LoginForm() {
    return (
        <Form>
            <Form.Group className="form-group">
                <Form.Label>Username or Email</Form.Label>
                <Form.Control placeholder="Username or Email" />
            </Form.Group>
            <Form.Group className="form-group">
                <Form.Label>Password</Form.Label>
                <Form.Control placeholder="Password" />
            </Form.Group>
            <Button variant="primary" size="lg" type="submit" className="btn-block">
                Submit
            </Button>
        </Form>
    )
}

export default LoginForm