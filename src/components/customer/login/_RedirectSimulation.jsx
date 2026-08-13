import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function RedirectSimulation() {
    return (
        <Card>
            <Card.Body>
                <h6>This is the external SSO login page.....</h6>
                {/* as={Link} swaps Button's rendered element for react-router's Link, which is what
                    actually understands `to` and performs the client-side navigation. */}
                <Button as={Link} to="/regular-login">Click here to simulate logging in and redirecting lack to lcpstore</Button>
            </Card.Body>
        </Card>
    )
}

export default RedirectSimulation;