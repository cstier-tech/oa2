import Menubar from './_Menubar.jsx';
import Shopbar from './_Shopbar.jsx';
import Megamenu from './_Megamenu.jsx';

function Header() {
    return (
        <header id="header">
            <Menubar />
            <Shopbar />
            <Megamenu>
                <Megamenu.Item id="373838" label="COMPANY STORE" href="/company-store" />
                <Megamenu.Item id="373845" label="PROFESSIONAL LEARNING" href="/professional-learning" />
                <Megamenu.Item id="373852" label="GENERAL MARKETING" href="/general-marketing" />
                <Megamenu.Item id="373853" label="TOUCHMATH" href="/touchmath">
                    <Megamenu.Item.DropdownItem id="373854" href="/branded-merchandise-4" label="BRANDED MERCHANDISE" />
                    <Megamenu.Item.DropdownItem id="373855" href="/event-kits" label="EVENT KITS" />
                    <Megamenu.Item.DropdownItem id="373856" href="/marketing-materials-3" label="MARKETING MATERIALS" />
                </Megamenu.Item>
            </Megamenu>
        </header>
    )
}

export default Header;