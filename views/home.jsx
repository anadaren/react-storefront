import '/src/App.css';
import { Link } from "react-router-dom";
import { PRODUCTS } from "/src/products";
import { Product } from "/src/product";
import { ShopContext } from "/src/shop-context.jsx";
import '/views/shop.css';

export const Home = () => {
  return (
    <div className="Home">
      
      <section id="top-section">
        <div id="top-section-container">
          <div>
        <h2>Get 15% off</h2>
        <p>See Latest Deals</p>
        <Link class="shop-button" to="/shop">Shop Now</Link>
        </div>
        <div>
          <img src='/src/assets/1.png'/>
        </div>
        </div>
    </section>

      <section id="promo-section">
        <div>
        <h2>Discover New Ways To Explore Luxery</h2>
        <Link class="shop-button" to="/shop">Shop Now</Link>
        </div>
        
    </section>

    <section id="about">
      <h2>Who We Are</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <Link class="shop-button" to="/shop">Learn More</Link>
    </section>

    <section id="cards">
      <h2>How it works</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      
      <grid-container>
      <div className="card">
        <div>
          Image
        </div>
        <div>
          <h2>Browse sellers</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>

      <div className="card">
        <div>
          Image
        </div>
        <div>
          <h2>Sell your own thing</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>

      <div className="card">
        <div>
          Image
        </div>
        <div>
          <h2>Manage purchases</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
    </grid-container>
    </section>

    <section id="testimonials">
      <h2>What people are saying</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      

    </section>

    
      
    </div>
  )
}
