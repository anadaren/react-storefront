import React, { useContext } from 'react';
import { PRODUCTS } from "/src/products";
import { ShopContext } from "/src/shop-context.jsx";
import { Link, useNavigate } from "react-router-dom";
import { CartItem } from '/src/components/cart-item';
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
            

            {totalAmount > 0 ? (
                <>
                <div className="cartItems">
                {PRODUCTS.map((product) => {
                    if(cartItems[product.id] !== 0) {
                        return <CartItem data={product} />
                    }
                })}
            </div>
                <div className="checkout">
                    <h3>Order Summary:</h3>
                    <p>Subtotal: ${totalAmount}</p>
                    <p>Shipping estimate: ${(totalAmount * .012).toFixed(2)}</p>
                    <p>Tax estimate: ${(totalAmount * .07).toFixed(2)}</p>
                    <hr></hr>
                    <p><b>Order total: ${(totalAmount + (totalAmount * .012) + (totalAmount * .07)).toFixed(2)}</b></p>

                        <button className="shop-button" onClick={() => {checkout(); navigate("/checkout");}}>
                            {" "}
                            Checkout{" "}
                        </button>
                  
                </div>
                </>
            ) : (
                <>
                <div id="empty-cart">
                <h2>Your Shopping Cart is Empty</h2>
                <p>Add some items to your cart to view them here!</p>
                <Link class="shop-button" to="/shop">Shop Now</Link>
                </div>
                <div className="checkout">
                    <h3>Order Summary:</h3>
                    <p>Subtotal: ${totalAmount}</p>
                    <p>Shipping estimate: ${(totalAmount * .012).toFixed(2)}</p>
                    <p>Tax estimate: ${(totalAmount * .07).toFixed(2)}</p>
                    <hr></hr>
                    <p><b>Order total: ${(totalAmount + (totalAmount * .012) + (totalAmount * .07)).toFixed(2)}</b></p>

                        <button className="shop-button" onClick={() => {checkout(); navigate("/checkout");}}>
                            {" "}
                            Checkout{" "}
                        </button>
                  
                </div>
                
                
                </>
            )}
            </div>
        </div>
    );
};