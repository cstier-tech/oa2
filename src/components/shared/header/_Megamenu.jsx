import { useState } from 'react';
// NavLink is a Link that also knows whether its own "to" matches the current URL;
// useMatch lets a component ask that same question about an arbitrary path on demand.
import { NavLink, useMatch } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Megamenu({ children }) {
    return (
        <div className="megamenu-section d-none d-lg-block">
            <nav className="navbar navbar-light">
                <div className="container megamenu-container">
                    <div className="megamenu simple megamenu-blend--next">
                        <div className="cms-menu cms-menu-navbar" data-menu-name="main">
                            <Nav as="ul" className="flex-row flex-nowrap navbar-nav" id="menu-main">
                                {children}
                            </Nav>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

function MegamenuItem({ id, label, children, to }) {
    const [show, setShow] = useState(false);
    const hasDropdown = Boolean(children);
    // Re-evaluates on every route change: true when the current URL matches `to`,
    // which is what drives the "selected" underline styling on the parent <li>.
    const isActive = useMatch(to);

    if (!hasDropdown) {
        return (
            <Nav.Item as="li" id={`main-nav-item-${id}`} className={isActive ? 'selected' : undefined}>
                {/* react-bootstrap's Nav.Link renders as react-router's NavLink instead of a plain <a>,
                    so clicking it does a client-side navigation (pushes history, no full page reload)
                    to the route in `to` rather than following an href. */}
                <Nav.Link as={NavLink} to={to} className="menu-link">
                    {label}
                </Nav.Link>
            </Nav.Item>
        );
    }

    return (
        <NavDropdown
            as="li"
            id={`main-nav-item-${id}`}
            title={label}
            show={show}
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
        >
            {children}
        </NavDropdown>
    )
}

function MegamenuDropdownItem({ label }) {
    return <NavDropdown.Item >{label}</NavDropdown.Item>;
}

Megamenu.Item = MegamenuItem;
Megamenu.Item.DropdownItem = MegamenuDropdownItem;

export default Megamenu;
