import React from 'react';
import '/src/components/navbar.css';
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer>
        
        <div id="footer-container">
          <div className="footer-column">
            <p>Products</p>
            <Link to="/shop" className="link-styles">Shop</Link>
            <Link to="/shop" className="link-styles">Trending</Link>
            <Link to="/shop" className="link-styles">What's New</Link>
            <Link to="/shop" className="link-styles">Categories</Link>
            <Link to="/shop" className="link-styles">Discounts</Link>
          </div>
          <div className="footer-column">
            <p>Explore</p>
            <Link to="/shop" className="link-styles">About</Link>
            <Link to="/shop" className="link-styles">Testimonials</Link>
            <Link to="/shop" className="link-styles">Track Order</Link>
            <Link to="/shop" className="link-styles">Beomce a Member</Link>
            <Link to="/shop" className="link-styles">Subscribe</Link>
            <Link to="/shop" className="link-styles">Careers</Link>
          </div>
          <div className="footer-column">
            <p>Contact Us</p>
            <Link to="/shop" className="link-styles">Customer Service</Link>
            <Link to="/shop" className="link-styles">Location</Link>
            <Link to="/shop" className="link-styles">Privacy Policy</Link>
            <Link to="/shop" className="link-styles">Terms of Use</Link>
            <Link to="/shop" className="link-styles">Legal</Link>
          </div>
          
        </div>
        <hr></hr>
        <div className="footer-text">©2024 ShopTitle. All Rights Reserved.</div>
      </footer>
    );
};