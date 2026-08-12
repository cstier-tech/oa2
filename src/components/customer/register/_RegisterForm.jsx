import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Register() {
    return (
        <Form>
            <fieldset className="content-group">
                <legend><span>Your Personal Details</span></legend>

                <Form.Group as={Row} className='form-group' controlId="FirstName">
                    <Col md={3}>
                        <Form.Label className='col-form-label required'>First name</Form.Label>
                    </Col>
                    <Col md={9}>
                        <Form.Control required type="text" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className='form-group' controlId="LastName">
                    <Col md={3}>
                        <Form.Label className='col-form-label required'>Last name</Form.Label>
                    </Col>
                    <Col md={9}>
                        <Form.Control required type="text" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className='form-group' controlId="Email">
                    <Col md={3}>
                        <Form.Label className='col-form-label required'>Email</Form.Label>
                    </Col>
                    <Col md={9}>
                        <Form.Control required type="email" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className='form-group' controlId="Username">
                    <Col md={3}>
                        <Form.Label className='col-form-label required'>Username</Form.Label>
                    </Col>
                    <Col md={9}>
                        <Form.Control required type="text" />
                    </Col>
                </Form.Group>
            </fieldset>


            <fieldset className="content-group">
                <legend><span>Your Password</span></legend>

                <Form.Group as={Row} className='form-group' controlId="Password">
                    <Col md={3}>
                        <Form.Label className='col-form-label required'>Password</Form.Label>
                    </Col>
                    <Col md={9}>
                        <Form.Control required type="password" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className='form-group' controlId="ConfirmPassword">
                    <Col md={3}>
                        <Form.Label className='col-form-label required'>Confirm password</Form.Label>
                    </Col>
                    <Col md={9}>
                        <Form.Control required type="password" />
                    </Col>
                </Form.Group>

            </fieldset>

            <fieldset className="content-group">
                <legend><span>Company Details</span></legend>

                <Form.Group as={Row} className='form-group' controlId="Company">
                    <Col md={3}>
                        <Form.Label className='col-form-label'>Company name</Form.Label>
                    </Col>
                    <Col md={9}>
                        <Form.Control type="text" />
                    </Col>
                </Form.Group>

            </fieldset>

            <Button variant="primary" type="button" size='lg'>
                Register
            </Button>
        </Form>


    )
}

export default Register;