import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from "/src/components/navbar.jsx";
import { Footer } from "/src/components/footer.jsx";
import { Home } from '/views/home.jsx';
import { Shop } from '/views/shop.jsx';
import { Cart } from '/views/cart.jsx';
import { ShopContextProvider } from './shop-context';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <div id="content">
          <NavBar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/shop" element={<Shop/>} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
        </div>
        <Footer/>
      </Router>
      </ShopContextProvider>  
    </div>
  )
}

export default App;
