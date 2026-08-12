import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Megamenu({ children }) {
    return (
        <div className="megamenu-section d-none d-lg-block">
            <nav className="navbar navbar-light">
                <div className="container megamenu-container">
                    <div className="megamenu simple megamenu-blend--next">
                        <div className="cms-menu cms-menu-navbar" data-menu-name="main">
                            <Nav as="ul" className="flex-row flex-nowrap" id="menu-main">
                                {children}
                            </Nav>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

function MegamenuItem({ id, label, children, onClick, value }) {
    const [show, setShow] = useState(false);
    const hasDropdown = Boolean(children);

    if (!hasDropdown) {
        return (
            <Nav.Item as="li" id={`main-nav-item-${id}`}>
                <Nav.Link className="menu-link" onClick={() => onClick(value)}>{label}</Nav.Link>
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
