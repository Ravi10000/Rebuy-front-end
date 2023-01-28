import "./App.scss";

// packages
import { useEffect, useState } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// api
import { fetchUserFromServer, fetchAllProducts } from "./utils/api";

// actions
import { setFlash } from "./redux/flash/flash.actions";
import { initializeProducts } from "./redux/shop/shop.actions";
import {
  signIn,
  startFetchingUser,
  endOfFetchingUser,
} from "./redux/user/user.actions";

// selectors
import { selectFlash } from "./redux/flash/flash.selectors";

// pages
import HomePage from "./pages/home/home.page";
import SignInPage from "./pages/sign-in/sign-in.page";
import SignUpPage from "./pages/sign-up/sign-up.component";
import ProductPage from "./pages/product/Product.page";
import ProfilePage from "./pages/profile/profile.page";
import CartPage from "./pages/cart/cart.page";

// components
import PopUp from "./components/popup/popup.component";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import Protect from "./components/protected-route/protected-route.component";
import ProtectAuth from "./components/protected-authenticate/protected-authenticate.component";

function App({
  flash,
  setFlash,
  initializeProducts,
  signIn,
  startFetchingUser,
  endOfFetchingUser,
}) {
  useEffect(() => {
    (async () => {
      try {
        startFetchingUser();
        const { data: user } = await fetchUserFromServer();
        endOfFetchingUser();
        if (user.error) {
          console.log(user.error);
          setFlash({
            type: "error",
            message: user.error.message,
          });
          return;
        }
        if (user) {
          setFlash({
            type: "success",
            message: "welcome back!",
          });
        }
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
      {flash && <PopUp type={flash?.type} message={flash?.message} />}
      {/* {<PopUp type={"success"} message={"this is test message"} />} */}
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
