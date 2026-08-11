import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Body({ children, pageClass }) {
    return (
        <div id="content-wrapper">
            <Container as="section" id="content">
                <Row id="content-body">
                    <Col id="content-center" lg={12}>
                        <div className={`page ${pageClass || ''}`}>
                            {children}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Body;