import '/src/App.css';
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="Home">
      
      <section id="top-section" >
        <div id="top-section-container">
          <div>
        <h2>Get 15% off</h2>
        <p>See Latest Deals</p>
        <Link to="/shop">Shop Now</Link>
        </div>
        <div>
          <img src='/src/assets/1.png'/>
        </div>
        </div>
    </section>

      <section>
        <div id="top-section-container-2">
        <h2>Lorem ipsum dolor sit amet</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <Link to="/shop">Shop Now</Link>
        </div>
    </section>

    <section id="about">
      <p>About</p>
      <h2>Lorem ipsum dolor sit amet</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <Link to="/shop">Learn More</Link>
    </section>

    <section id="cards">
      <p>Work</p>
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
      <p>Testimonials</p>
      <h2>What people are saying</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      

    </section>

    
      
    </div>
  )
}
