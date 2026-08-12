// import { Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


function LoginBoxCard({ children, heading }) {
    return (
        <Card className="shadow-sm p-3 p-md-4 mb-5 mb-md-0 login-box">
                <h3 className="h4 mb-0 text-center">
                    {heading}
                </h3>
                <hr />
                {children}
        </Card>
    )
}

export default LoginBoxCard;