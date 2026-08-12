import { forwardRef } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Body = forwardRef(function Body({ children, pageClass, pageTitle, hasPageBody = false, pageBodyClass }, ref) {
    return (
        <div id="content-wrapper">
            <Container as="section" id="content">
                <Row id="content-body">
                    <Col id="content-center" lg={12}>
                        <div className={`page ${pageClass || ''}`}>
                            {pageTitle &&
                                <div class="page-title">
                                    <h1 class="h3">Register</h1>
                                </div>
                            }
                            {hasPageBody
                                ? <div className={`page-body ${pageBodyClass}`}>
                                    <div ref={ref} data-export-region style={{ display: 'contents' }}>
                                        {children}
                                    </div>
                                </div>
                                : <div ref={ref} data-export-region style={{ display: 'contents' }}>
                                    {children}
                                </div>}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    )
});

export default Body;