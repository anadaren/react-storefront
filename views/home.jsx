import '/src/App.css';
import { Link } from "react-router-dom";
import '/views/shop.css';
import { PRODUCTS } from "/src/products";
import { Product } from "/src/components/product";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Home = () => {
  return (
    <div className="Home">

    <section id='top-section'>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={4000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 1,
            partialVisibilityGutter: 40
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464
            },
            items: 1,
            partialVisibilityGutter: 30
          }
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        <div className="top-panels" id="panel1">
        <div className="flex-container">
          <div>
        <h2>Get 15% off</h2>
        <p>See Latest Deals</p>
        <Link className="shop-button" to="/shop">Shop Now</Link>
        </div>
        <div>
          <img src='/src/assets/1.png'/>
        </div>
        </div>
        </div>

        <div className="top-panels" id="panel2">
        <div className="flex-container">
          <div>
        <h2>Get 15% off</h2>
        <p>See Latest Deals</p>
        <Link className="shop-button" to="/shop">Shop Now</Link>
        </div>
        <div>
          <img src='/src/assets/2.png'/>
        </div>
        </div>
        </div>

        <div className="top-panels" id="panel3">
        <div className="flex-container">
          <div>
        <h2>Get 15% off</h2>
        <p>See Latest Deals</p>
        <Link className="shop-button" to="/shop">Shop Now</Link>
        </div>
        <div>
          <img src='/src/assets/3.png'/>
        </div>
        </div>
        </div>
      </Carousel>

    </section>

    <section id="promo-section">
      <h2>Discover New Ways To Explore Luxery</h2>

      <div id='promo-cards'>
        <div className="card">
          <div>
          <img src="/src/assets/2.png"/>
          </div>
          <div>
            <h2>Electronics</h2>
            <Link className="shop-button" to="/shop">Shop Now</Link>
          </div>
        </div>

       

        <div className="card">
          <div>
            <img src="/src/assets/4.png"/>
          </div>
          <div>
            <h2>Apparel</h2>
            <Link className="shop-button" to="/shop">Shop Now</Link>
          </div>
        </div>

        <div className="card">
          <div>
          <img src="/src/assets/5.png"/>
          </div>
          <div>
            <h2>Home</h2>
            <Link className="shop-button" to="/shop">Shop Now</Link>
          </div>
        </div>

      </div>
    </section>

    <section id="featured-section">

        <h3>Featured</h3>
        <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 3,
            partialVisibilityGutter: 40
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464
            },
            items: 2,
            partialVisibilityGutter: 30
          }
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {PRODUCTS.map((product) => (
          <Product key={product.id} data={product}/>
        ))}
      </Carousel>

        

    </section>
    
      
    </div>
  )
}
