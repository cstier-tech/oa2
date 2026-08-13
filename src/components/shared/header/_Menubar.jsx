import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-regular-svg-icons';
import {
    faUserCircle,
    faAngleDown,
    faGear,
    faShoppingBag,
    faRightFromBracket,
    faFilter,
    faCheck,
    faUser
} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";


function Menubar({ onLogout }) {
    return (
        <div className="menubar-section d-none d-lg-block menubar-light">
            <div className="container menubar-container">
                <nav className="menubar navbar navbar-slide">
                    <nav className="menubar-group ml-auto">
                        {/* plain <a> doesn't understand "as" - that's a react-bootstrap-only pattern.
                            Link is react-router's own anchor and needs no "as" wrapping. */}
                        <Link to='/regular-login' className="menubar-link" id='LogIn'>
                            <span>Log In</span>
                        </Link>
                        <Link to='/sso-login' className="menubar-link" id='SSOLogIn'>
                            <span>SSO Log In</span>
                        </Link>
                        <a className="menubar-link" id='LogOut' onClick={onLogout}>
                            <span>Log Out</span>
                        </a>
                    </nav>
                </nav>
            </div>
        </div>
    )
}



export default Menubar;