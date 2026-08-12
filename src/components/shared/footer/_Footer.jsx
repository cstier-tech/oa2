function Footer({ children }) {
    return (
        <footer id="footer" className="footer-light">
            <div className="footer-main-wrapper">
                <div className="container footer-main">
                    <div className="row sm-gutters">
                        {children}
                    </div>
                </div>
            </div>
            <div className="footer-bottom-wrapper">
                <div className="container footer-bottom">
                    <div className="row sm-gutters">
                        <div className="col-12 col-sm-auto pb-1 pb-sm-0 text-sm-center">
                            <a href="https://www.smartstore.com/" className="sm-hint" target="_blank"><strong>Shopsystem</strong></a> by SmartStore AG © 2026
                        </div>
                        <div className="col text-sm-right">
                            Copyright © 2026. All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

function FooterMenu({ children, title }) {
    return (
        <div className="col-md-3">
            <nav className="footer-links nav-collapsible">
                <h4 className="footer-title nav-toggler collapsed" data-toggle="collapse" data-target="#footer-service" aria-controls="footer-service" aria-expanded="false">
                    <span className="d-none d-md-block">{title}</span>
                    <span className="d-md-none">{title}</span>
                </h4>
                <div className="collapse nav-collapse" id="footer-service">
                    <div className="cms-menu cms-menu-linklist" data-menu-name="footerservice">
                        <ul className="list-unstyled">
                            {children}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    )
}

function FooterMenuItem({ href, label }) {
    return (
        <li>
            <a href={href} className="menu-link">
                <span>{label}</span>
            </a>
        </li>
    )
}

Footer.Menu = FooterMenu;
Footer.Menu.Item = FooterMenuItem;


export default Footer;