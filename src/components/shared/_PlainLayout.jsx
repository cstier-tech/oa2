// Rendered directly as a top-level route in App.jsx, outside the Layout route,

import Main from "./_Main";
import { Outlet } from "react-router-dom";


// so it does NOT get the site header/main-wrapper/footer chrome.
function PlainLayout({ children }) {
    return (
        <Main>
            <Outlet />
        </Main>
    )
}

export default PlainLayout;
