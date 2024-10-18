import '/src/App.css';
import { Link } from "react-router-dom";
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

        <grid-container className="products">
      <div className="card">
        <div>
        <img src="/src/assets/2.png"/>
        </div>
        <div>
          <h2>Electronics</h2>
          <Link class="shop-button" to="/shop">Shop Now</Link>
        </div>
      </div>

      <div className="card">
        <div>
          <img src="/src/assets/4.png"/>
        </div>
        <div>
          <h2>Apparel</h2>
          <Link class="shop-button" to="/shop">Shop Now</Link>
        </div>
      </div>

      <div className="card">
        <div>
        <img src="/src/assets/5.png"/>
        </div>
        <div>
          <h2>Home</h2>
          <Link class="shop-button" to="/shop">Shop Now</Link>
        </div>
      </div>
    </grid-container>

        
    </div>

    </section>
    
      
    </div>
  )
}
