import Menubar from './_Menubar.jsx';
import Shopbar from './_Shopbar.jsx';
import Megamenu from './_Megamenu.jsx';

function Header({ activePage, onNavClick}) {
    return (
        <header id="header">
            <Menubar />
            <Shopbar />
            <Megamenu>
                <Megamenu.Item id="1" label="Regular Login" onClick={onNavClick} value={'regular-login'} />
                <Megamenu.Item id="2" label="SSO Login" onClick={onNavClick} value={'sso-login'}/>
                {/* <Megamenu.Item id="3" label="Category 3" /> */}
                {/* <Megamenu.Item id="4" label="Category 4" >
                    <Megamenu.Item.DropdownItem id="5" label="Sub Category 1" />
                    <Megamenu.Item.DropdownItem id="6" label="Sub Category 2" />
                    <Megamenu.Item.DropdownItem id="7" label="Sub Category 3" />
                </Megamenu.Item> */}
        </Megamenu>
        </header >
    )
}

export default Header;