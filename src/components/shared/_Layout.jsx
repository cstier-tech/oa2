import { Outlet } from "react-router-dom";
import Header from "./header/_Header";
import Main from "./_Main";
import Footer from "./footer/_Footer";

// Used as a layout route in App.jsx (<Route element={<Layout />}>...</Route>): react-router renders
// this component for every nested child route, and <Outlet /> is where that matched child gets
// rendered. Any route NOT nested under it (e.g. /plain-page) skips this header/main/footer chrome entirely.
function Layout() {
    return (
        <div id='page'>
            <div className='page-main'>
                <Header />
                <Main>
                    <Outlet />
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