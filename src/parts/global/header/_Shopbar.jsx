import SearchBar from './_SearchBar.jsx';
import Logo from '../../../assets/logo.svg';
import ShopbarTool from './_ShopbarTool.jsx';

function Shopbar() {
    return (
        <div className="shopbar-section shopbar-light">
            <div className="container shopbar-container">

                <div className="shopbar">
                    <div className="shopbar-col-group shopbar-col-group-brand">
                        {/* <!-- LOGO --> */}
                        <div className="shopbar-col shop-logo">

                            <a href="/" className="brand">
                                <img src={Logo} alt="Logo" title="Logo" className="img-fluid" width="500" height="181" />
                            </a>
                        </div>
                        {/* <!-- SEARCH --> */}
                        <SearchBar />
                    </div>
                    <div className="shopbar-col-group shopbar-col-group-tools">
                        {/* <!-- TOOLS --> */}
                        <div className="shopbar-col shopbar-tools" data-summary-href="/shoppingcart/cartsummary?cart=True&amp;wishlist=False&amp;compare=False">
                            <ShopbarTool tool="cart" />
                            <ShopbarTool tool="favorites" />
                            <ShopbarTool tool="wishlist" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shopbar;