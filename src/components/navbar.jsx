import React from 'react';
import { Link } from "react-router-dom";
import '/src/components/navbar.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';

export const NavBar = () => {
    return (
        <nav>
        <Link to="/">LuxShop</Link>

        <div className="search-container">
        <input type="text" className="search-bar" placeholder="Search"/>
        <button type="submit"><SearchIcon/></button>
        </div>

        <div id="navlink-container">
          <Link to="/shop" className="link-styles">Shop</Link>
          <Link to="/shop" className="link-styles">Trending</Link>
          <Link to="/shop" className="link-styles">What's New</Link>
        </div>
        <div id="navicon-container">
          <Link to="/shop" className="link-icons"><PersonIcon/></Link>
          <Link to="/shop" className="link-icons"><FavoriteIcon/></Link>
          <Link to="/cart" className="link-icons"><ShoppingCartIcon/></Link>
        </div>
      </nav>
    );
};