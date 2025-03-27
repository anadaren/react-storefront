import React, { useContext } from 'react';
import { ShopContext } from "/src/shop-context.jsx";
import Star from '@mui/icons-material/Star';
import StarBorder from '@mui/icons-material/StarBorder';
import StarHalf from '@mui/icons-material/StarHalf';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export const Product = (props) => {
    const { id, productName, price, productImage, category, rating } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);

    // Amount of each item in cart
    const cartItemAmount = cartItems[id];


    return (
        <div className="product">
            <div className='favBtn'><FavoriteBorderIcon></FavoriteBorderIcon></div>
            
            <img src={productImage} />
            <div className="description">
                <p><b>{productName}</b></p>
                <div id="rating">
                <Star></Star><Star></Star><Star></Star><StarHalf></StarHalf><StarBorder></StarBorder>
                </div>
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