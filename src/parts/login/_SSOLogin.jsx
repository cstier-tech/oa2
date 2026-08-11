import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

function SSOLogin({ onAdminLogin }) {
    return (
        <>
            <Button variant="secondary" size="lg" type="submit" className="btn-block">
                SSO Login
            </Button>
            <Button variant="primary" size="lg" type="submit" className="btn-block">
                SSO Login
            </Button>

            <div className="admin-login text-center mt-3">
                <a href="#" onClick={(e) => { e.preventDefault(); onAdminLogin(); }}>Admin Login</a>
            </div>
        </>
    )
}

SSOLogin.propTypes = {
    onAdminLogin: PropTypes.func.isRequired,
};

export default SSOLogin;