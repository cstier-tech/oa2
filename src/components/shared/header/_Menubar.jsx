import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import {
    faUserCircle,
    faAngleDown,
    faGear,
    faShoppingBag,
    faRightFromBracket,
    faFilter,
    faCheck,
} from '@fortawesome/free-solid-svg-icons';

function Menubar() {
    return (
        <div className="menubar-section d-none d-lg-block menubar-light">
            <div className="container menubar-container">
                <nav className="menubar navbar navbar-slide">
                    <nav className="menubar-group ml-auto">
                        <div className="cms-menu cms-menu-linklist" data-menu-name="faq">
                            <ul className="list-unstyled">
                                <li>
                                    <a href="/faq" className="menu-link menubar-link">
                                        <span>FAQ</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <a className="menubar-link" href="/contactus">Contact us</a>
                    </nav>
                    <nav id="menubar-my-account" className="menubar-group">
                        <div className="dropdown">
                            <a className="menubar-link" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="/customer/info" rel="nofollow">
                                <FontAwesomeIcon icon={faUserCircle} className="menubar-icon" />
                                <span title="cstier@lakecountypress.com">user@email.com</span>
                                {/* <FontAwesomeIcon icon={faAngleDown} className="menubar-caret" /> */}
                            </a>
                            {/* <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="/customer/info" rel="nofollow">
                                    <FontAwesomeIcon icon={faUser} fixedWidth />
                                    <span>My account</span>
                                </a>
                                <a className="dropdown-item" href="/admin" target="_admin" rel="nofollow">
                                    <FontAwesomeIcon icon={faGear} fixedWidth />
                                    <span>Admin</span>
                                </a>
                                <a id="topcartlink" className="dropdown-item" href="/cart">
                                    <FontAwesomeIcon icon={faShoppingBag} fixedWidth />
                                    <span>Shopping cart</span>
                                    <span className="cart-qty badge badge-success d-none">0</span>
                                </a>
                                <div className="dropdown-divider"></div>

                                <a className="dropdown-item" href="/logout" rel="nofollow">
                                    <FontAwesomeIcon icon={faRightFromBracket} fixedWidth />
                                    <span>Log out</span>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/Plugins/SmartStore.CCReport/Report/List" rel="nofollow">
                                    <FontAwesomeIcon icon={faFilter} fixedWidth />
                                    <span>Report</span>
                                </a>
                            </div> */}
                        </div>
                        <nav className="menubar-group menubar-group--special d-block font-weight-400">
                            <a className="menubar-link" href="/Approval/List" rel="nofollow">
                                <FontAwesomeIcon icon={faCheck} className="menubar-icon" />
                                <span>Approvals</span>
                            </a>
                        </nav>
                    </nav>
                    <nav className="menubar-group menubar-group--special d-none d-xl-block">
                        <a className="menubar-link" href="/admin" target="_admin" rel="nofollow">
                            <FontAwesomeIcon icon={faGear} className="menubar-icon" />
                            <span>Admin</span>
                        </a>
                    </nav>
                </nav>
            </div>
        </div>
    )
}

export default Menubar;