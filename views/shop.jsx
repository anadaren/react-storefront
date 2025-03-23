import React from 'react';
import { PRODUCTS } from "/src/products";
import { Product } from "/src/product";
import { ShopContext } from "/src/shop-context.jsx";
import '/views/shop.css';

export const Shop = () => {
    return (
        <div className="shop">
            <div className="shopTitle">
                <h1>Our Products</h1>
                <div className="products">
                    {PRODUCTS.map((product) => (
                        <Product key={product.id} data={product}/>
                    ))}
                </div>
            </div>
            
        </div>
    );
};