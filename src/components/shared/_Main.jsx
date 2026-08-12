import { forwardRef } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Main = forwardRef(function Main({ children, pageClass, pageTitle, hasPageMain = false, pageMainClass }, ref) {
    return (
        
            <div id="content-wrapper">
                <Container as="section" id="content">
                    <Row id="content-Main">
                        <Col id="content-center" lg={12}>
                            <div className={`page ${pageClass || ''}`}>
                                {pageTitle &&
                                    <div className="page-title">
                                        <h1 className="h3">Register</h1>
                                    </div>
                                }
                                {hasPageMain
                                    ? <div className={`page-Main ${pageMainClass}`}>
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

export default Main;