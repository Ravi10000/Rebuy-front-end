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
import { selectFlash } from "./redux/flash/flash.selectors";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";
import ProfilePage from "./pages/profile/profile.page";
import { fetchUserFromServer } from "./utils/api";
import { signIn } from "./redux/user/user.actions";
import { setFlash } from "./redux/flash/flash.actions";
function App({ currentUser, flash, signIn }) {
  const [isFetchingUser, setFetchingUser] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        // fetch user
        // const { data } = await axios.get("https://mrphonex-api.onrender.com/api/user");
        const { data } = await fetchUserFromServer();
        setFetchingUser(false);
        if (data.error) {
          console.log(data.error);
          flash({
            type: "error",
            message: data.error.message,
          });
          return;
        }

        // signin user and products in redux
        signIn(data.user);
      } catch (error) {
        console.log(error.message);
        flash({
          type: "error",
          message: error.message,
        });
      }
    })();
  }, [signIn, setFlash]);
  return (
    <div className="app">
      {flash && <PopUp type={flash.type} message={flash.message} />}
      <Header />
      <Switch>
        <Route exact path="/signin" component={SignInPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/products/:id" component={ProductPage} />
        <Route path="/" component={HomePage} />
      </Switch>

      <Footer />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  flash: selectFlash,
});

const mapDispatchToProps = (dispatch) => ({
  signIn: (user) => dispatch(signIn(user)),
  flash: flash => dispatch(setFlash(flash))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
