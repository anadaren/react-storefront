import React from 'react';
import { PRODUCTS } from "/src/products";
import { Product } from "/src/components/product";
import '/views/shop.css';

export const Shop = () => {
    return (
        <>
            <div className="shopTitle">
                <h1>Our Products</h1>
                <div className="top">
                
                <div className='shop-buttons'>
                    <button className="shop-button tab-selected" onclick="openTab('product'); selectTab(this)">All</button>
                    <button className="shop-button" onclick="openTab('electronics'); selectTab(this)">Electronics</button>
                    <button className="shop-button"  onclick="openTab('apparel'); selectTab(this)">Apparel</button>
                    <button className="shop-button"  onclick="openTab('home'); selectTab(this)">Home</button>
                </div>

                    <div className='search'>
                        <label>Sort by: </label>
                        <select id="selectlist">
                        <option value="new">Newest</option>
                            <option value="name">Name</option>
                            <option value="rating">Top Rated</option>
                            <option value="price1">Price: Low to High</option>
                            <option value="price2">Price: High to Low</option>
                        </select>
                    </div>
                </div>
                <div className="products">
                    {PRODUCTS.map((product) => (
                        <Product key={product.id} data={product}/>
                    ))}
                </div>
            </div>
            
        </>
    );
};