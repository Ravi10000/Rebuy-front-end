import "./home.styles.scss";

import Logo from "../../components/logo/logo.component";
import Btn from "../../components/btn/btn.component";
import CardList from "../../components/card-list/card-list.component";
import ScrollToTop from "../../components/scroll-to-top/scroll-to-top.component";
import { brands } from "../../utils/brands";
// import { Typewriter } from 'react-simple-typewriter'
import { Link } from "react-router-dom";
import Spinner from "../../components/spinner/spinner.component";

import {
  selectCurrentUser,
  selectIsFetchingUser,
} from "../../redux/user/user.selectors";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

function HomePage({ currentUser, isFetchingUser }) {
  return (
    <div className="home-page">
      <ScrollToTop />
      <div className="banner">
        <div className="title-container">
          <div className="title">
            <Logo />
            <p className="subtitle">
              Refurbished Smartphones <br />
              <span>Best Prices</span>
            </p>
          </div>
          {isFetchingUser ? (
            <Spinner />
          ) : (
            !currentUser && (
              <div className="banner-btns">
                <Link to="/signin">
                  <Btn>Log in</Btn>
                </Link>
                <Link to="/signup">
                  <Btn __btn_secondary>Sign up</Btn>
                </Link>
              </div>
            )
          )}
        </div>
        <div className="hero-container">
          <img className="hero-img" src="/hero.png" alt="hero" />
        </div>
        {/* <div className="bubbles">
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
        </div> */}
      </div>
      <div className="all-devices-container">
        <div className="for-sale-title __heading">
          <h2>For Sale</h2>
          <p>Top Refurbished Smartphones </p>
        </div>
        <CardList />
      </div>
      <div className="shop-by-price">
        <h2 className="__heading">Shop By Price</h2>
        <div className="container">
          <div>
            <p>
              under <br /> Rs.5000
            </p>
            <img src="arrow-forward-btn.png" alt="" />
          </div>
          <div>
            <p>
              under <br /> Rs.6000
            </p>
            <img src="arrow-forward-btn.png" alt="" />
          </div>
          <div>
            <p>
              under <br /> Rs.7000
            </p>
            <img src="arrow-forward-btn.png" alt="" />
          </div>
          <div>
            <p>
              under <br /> Rs.8000
            </p>
            <img src="arrow-forward-btn.png" alt="" />
          </div>
          <div>
            <p>
              custom <br /> price
            </p>
            <img src="arrow-forward-btn.png" alt="" />
          </div>
        </div>
      </div>
      <div className="shop-by-brand">
        <h2 className="__heading">Shop By Brand</h2>
        <div className="brands-container">
          {brands?.map((brand) => (
            <img src={`${brand}.png`} alt={brand} key={brand} />
          ))}
        </div>
      </div>
      <div className="shop-by-year">
        <h2 className="__heading">Shop By Launch Date</h2>
        <div className="container">
          <div>2022</div>
          <div>2021</div>
          <div>2020</div>
          <div>2019</div>
          <div>2018</div>
          {/* <div>custom year</div> */}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isFetchingUser: selectIsFetchingUser,
});

export default connect(mapStateToProps)(HomePage);
