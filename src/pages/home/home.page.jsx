import "./home.styles.scss";

import Logo from "../../components/logo/logo.component";
import Btn from "../../components/btn/btn.component";
import CardList from "../../components/card-list/card-list.component";
import { brands } from "../../utils/brands";
// import { Typewriter } from 'react-simple-typewriter'
import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <div className="home-page">
      <div className="banner">
        <div className="title-container">
          <div className="title">
            <Logo />
            {/* <p className="subtitle">Your Dream Flagship Smartphones <br/> At The Best Prices</p> */}
            <p className="subtitle">
              Refurbished Smartphones <br />
              <span>Best Prices</span>
            </p>
          </div>
          <div className="banner-btns">
            <Link to="/signin">
              <Btn>Log in</Btn>
            </Link>
            <Link to="/signup">
              <Btn __btn_secondary>Sign up</Btn>
            </Link>
          </div>
        </div>
        <div className="hero-container">
          <img className="hero-img" src="/hero.png" alt="hero" />
        </div>
        <div className="bubbles">
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
        </div>
      </div>
      <div className="all-devices-container">
        <div className="for-sale-title __heading">
          <h2>For Sale</h2>
          <p>Top Refurbished Smartphones </p>
        </div>
        <CardList />
      </div>
      <div className="shop-by-brand">
        <h2 className="__heading">Shop By Brand</h2>
        <div className="brands-container">
          {brands?.map((brand) => (
            <img src={`${brand}.png`} alt={brand} />
          ))}
        </div>
      </div>
      <div className="shop-by-price">
        <h2 className="__heading">Shop By Price</h2>
        <div className="container">
          <div>
            <p>under <br/> Rs.5000</p>
            <img src="arrow-forward-btn.png" alt="" />
          </div>
          <div>
            <p>under <br/> Rs.6000</p>
            <img src="arrow-forward-btn.png" alt="" />
          </div>
          <div>
            <p>under <br/> Rs.7000</p>
            <img src="arrow-forward-btn.png" alt="" />
          </div>
          <div>
            <p>under <br/> Rs.8000</p>
            <img src="arrow-forward-btn.png" alt="" />
          </div>
          <div>
            <p>under <br/> Rs.9000</p>
            <img src="arrow-forward-btn.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
