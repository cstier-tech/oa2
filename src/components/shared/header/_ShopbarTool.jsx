import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faStar, faHeart } from '@fortawesome/free-regular-svg-icons';

const TOOL_CONFIG = {
    cart: {
        icon: 'bag',
        href: '/cart',
        summaryHref: '/shoppingcart/cartsummary?cart=True&wishlist=False&compare=False',
        bindTo: 'CartItemsCount',
        // badgeClass: 'label-cart-amount',
        labelTop: 'Shopping',
        labelBottom: 'Basket',
        labelSm: 'Basket',
    },
    favorites: {
        icon: 'star',
        href: '/favorites',
        summaryHref: '/favorites/favoritessummary',
        bindTo: 'FavoritesItemsCount',
        // badgeClass: 'label-favorites-amount',
        labelTop: 'Favorite',
        labelBottom: 'Items',
        labelSm: 'Items',
    },
    wishlist: {
        icon: 'heart',
        href: '/wishlist',
        summaryHref: '/wishlist/wishlistsummary',
        bindTo: 'WishlistItemsCount',
        // badgeClass: 'label-wishlist-amount',
        labelTop: 'Wish',
        labelBottom: 'List',
        labelSm: 'List',
    },
};

function ShopbarTool({ tool }) {
    const config = TOOL_CONFIG[tool];
    const offcanvasTarget = `#offcanvas-${tool}`;

    return (
        <div className="shopbar-tool" id={`shopbar-${tool}`} data-target={`#${tool}-tab`}>
            <a href={config.href} className="shopbar-button navbar-toggler" data-toggle="offcanvas" data-summary-href={config.summaryHref} data-autohide="true" data-placement="right" data-fullscreen="false" data-disablescrolling="true" data-target={offcanvasTarget}>
                <span className="shopbar-button-icon">
                    <i className={`icm icm-${config.icon}`}></i>
                    <span className={`badge badge-pill label-cart-amount badge-warning`} data-bind-to={config.bindTo}>0</span>
                </span>
                <span className="shopbar-button-label">
                    <span>{config.labelTop}</span><br />
                    <strong>{config.labelBottom}</strong>
                </span>
                <span className="shopbar-button-label-sm">
                    {config.labelSm}
                </span>
            </a>
        </div>
    )
}

ShopbarTool.propTypes = {
    tool: PropTypes.oneOf(['cart', 'favorites', 'wishlist']).isRequired,
};

export default ShopbarTool;
