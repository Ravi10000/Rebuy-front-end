import "./App.scss";

import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { useEffect, useState } from "react";

// pages
import HomePage from "./pages/home/home.page";
import SignInPage from "./pages/sign-in/sign-in.page";
import SignUpPage from "./pages/sign-up/sign-up.component";
import ProductPage from "./pages/product/Product.page";
import PopUp from "./components/popup/popup.component";

// components
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import ProfilePage from "./pages/profile/profile.page";
import { fetchUserFromServer } from "./utils/api";
import { signIn } from "./redux/user/user.actions";
import { selectFlash } from "./redux/flash/flash.selectors";
import { setFlash } from "./redux/flash/flash.actions";
import { fetchAllProducts } from "./utils/api";
import { initializeProducts } from "./redux/shop/shop.actions";
import Protect from "./components/protected-route/protected-route";
import ProtectAuth from "./components/protected-authenticate/protected-authenticate";
import CartPage from "./pages/cart/cart.page";
import {
  startFetchingUser,
  endOfFetchingUser,
} from "./redux/user/user.actions";

function App({
  flash,
  signIn,
  initializeProducts,
  setFlash,
  startFetchingUser,
  endOfFetchingUser,
}) {
  useEffect(() => {
    (async () => {
      try {
        // fetch user
        // const { data } = await axios.get("https://mrphonex-api.onrender.com/api/user");
        startFetchingUser();
        const { data: user } = await fetchUserFromServer();
        endOfFetchingUser();
        console.log({ user });
        // setFetchingUser(false);
        if (user.error) {
          console.log(user.error);
          setFlash({
            type: "error",
            message: user.error.message,
          });
          return;
        }

        // signin user and products in redux
        signIn(user);
      } catch (error) {
        console.log(error.message);
        setFlash({
          type: "error",
          message: error.message,
        });
      }
    })();
  }, []);

  useEffect(() => {
    (async function () {
      const { data: products } = await fetchAllProducts();
      initializeProducts(products);
    })();
  }, []);

  return (
    <div className="app">
      {flash && <PopUp type={flash.type} message={flash.message} />}
      <Header />
      <Switch>
        <ProtectAuth exact path="/signin" component={SignInPage} />
        <ProtectAuth exact path="/signup" component={SignUpPage} />
        <Protect exact path="/profile" component={ProfilePage} />
        <Protect exact path="/cart" component={CartPage} />
        <Route exact path="/products/:id" component={ProductPage} />
        <Route path="/" component={HomePage} />
      </Switch>

      <Footer />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  flash: selectFlash,
});

const mapDispatchToProps = (dispatch) => ({
  signIn: (user) => dispatch(signIn(user)),
  setFlash: (flash) => dispatch(setFlash(flash)),
  initializeProducts: (productsInfo) =>
    dispatch(initializeProducts(productsInfo)),
  startFetchingUser: () => dispatch(startFetchingUser()),
  endOfFetchingUser: () => dispatch(endOfFetchingUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
