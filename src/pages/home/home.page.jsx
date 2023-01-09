import "./home.styles.scss";

import Logo from "../../components/logo/logo.component";
import Btn from "../../components/btn/btn.component";
import CardList from "../../components/card-list/card-list.component";
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
        <div className="for-sale-title">
          <h2>For Sale</h2>
          <p>Top Refurbished Smartphones </p>
        </div>
        <CardList />
      </div>
    </div>
  );
}
