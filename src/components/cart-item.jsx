import React, { useContext } from "react";
import { ShopContext } from "/src/shop-context.jsx";
import '/views/cart.css';
import DeleteIcon from '@mui/icons-material/Delete';

export const CartItem = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

    return (
        <div className="cartItem">
            <img src={productImage}/>
            
            <div className="description">
            <p>{" "}<b>{productName}</b></p>
            <p>${price}</p>
            <div className="counterHandler">
                <button onClick={() => removeFromCart(id)}> - </button>
                <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
                <button onClick={() => addToCart(id)}> + </button>
            </div>
           
        </div>
        <DeleteIcon/>
        </div>
    )
}