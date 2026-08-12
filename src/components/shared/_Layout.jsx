import Header from "./header/_Header";
import Main from "./_Main";
import Footer from "./footer/_Footer";

function Layout({ activePage, onNavClick, children }) {
    return (
        <div id='page'>
            <div className='page-main'>
                <Header activePage={activePage} onNavClick={onNavClick} />
                <Main>
                    {children}
                </Main>
                <Footer>
                    <Footer.Menu title="Information">
                    </Footer.Menu>
                    <Footer.Menu title="Service">
                        <Footer.Menu.Item href="#" label="Contact Us" />
                    </Footer.Menu>
                    <Footer.Menu title="Company">
                        <Footer.Menu.Item href="#" label="Privacy" />
                    </Footer.Menu>
                </Footer>
            </div>
        </div>
    )
}

export default Layout;