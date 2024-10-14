import React, { useContext } from 'react';
import { PRODUCTS } from "/src/products";
import { ShopContext } from "/src/shop-context.jsx";
import { useNavigate } from "react-router-dom";
import { CartItem } from '/src/cart-item';
import '/views/cart.css';

export const Cart = () => {
    const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    const navigate = useNavigate();     // Allows for navigating between pages

    return (
        <div className="cart">
            <div>
                <h1>Your Cart</h1>
            </div>
            <div className="cart-container">
            <div className="cartItems">
                {PRODUCTS.map((product) => {
                    if(cartItems[product.id] !== 0) {
                        return <CartItem data={product} />
                    }
                })}
            </div>

            {totalAmount > 0 ? (
                <div className="checkout">
                    <p><b>Order Summary:</b></p>
                    <p>Subtotal: ${totalAmount}</p>
                    <p>Shipping estimate: $5.00</p>
                    <p>Tax estimate: $15.00</p>
                    <hr></hr>
                    <p>Total: ${totalAmount}</p>

                    <div className="checkout-buttons">
                        <button onClick={() => navigate("/shop")}>Continue Shopping</button>
                        <button onClick={() => {checkout(); navigate("/checkout");}}>
                            {" "}
                            Checkout{" "}
                        </button>
                    </div>
                </div>
            ) : (
                <h2>Your Shopping Cart is Empty</h2>
            )}
            </div>
        </div>
    );
};