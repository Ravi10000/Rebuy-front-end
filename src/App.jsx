import "./App.scss";

import { Switch, Route, Redirect, withRouter } from "react-router-dom";

// pages
import HomePage from "./pages/home/home.page";
import SignInPage from "./pages/sign-in/sign-in.page";
import SignUpPage from "./pages/sign-up/sign-up.component";
import ProductPage from "./pages/product/Product.page";

// components
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";

function App() {

  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/signin" component={SignInPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/:id" component={ProductPage} />
        <Route path="/" component={HomePage} />
      </Switch>

      <Footer />
    </div>
  );
}

export default withRouter(App);
