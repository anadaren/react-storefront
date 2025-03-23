import React, { useContext } from 'react';
import { ShopContext } from "/src/shop-context.jsx";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export const Product = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);

    // Amount of each item in cart
    const cartItemAmount = cartItems[id];

    return (
        <div className="product">
            <img src={productImage} />
            <div className="description">
                <p><b>{productName}</b></p>
                <p>${price}</p>
            </div>
            <button className="detailsBtn" onClick={() => addToCart(id)}>
                View Details
            </button>
            <button className="addToCartBtn" onClick={() => addToCart(id)}>
                Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
            </button>
        </div>
    );
}