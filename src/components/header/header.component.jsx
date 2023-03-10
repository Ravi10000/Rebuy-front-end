// styles
import "./header.styles.scss";

// packages
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// selectors
import {
  selectCurrentUser,
  selectIsFetchingUser,
} from "../../redux/user/user.selectors";

// components
import Logo from "../logo/logo.component";
import Btn from "../btn/btn.component";
import Spinner from "../spinner/spinner.component";

function Header({ user, isFetchingUser }) {
  return (
    <header>
      <div className="logo-container">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      {isFetchingUser ? (
        <Spinner sm />
      ) : !user ? (
        <div className="logged-out">
          <Link to="/search">
            <img className="search-icon" src="/search-custom.png" alt="" />
          </Link>
          <Link to="/signin">
            <Btn>Log in</Btn>
          </Link>
        </div>
      ) : (
        <div className="logged-in">
          <Link to="/search">
            <img className="search-icon" src="/search-custom.png" alt="" />
          </Link>
          <Link to="/cart">
            <img src="/cart.png" alt="" />
          </Link>
          <Link to="/profile">
            <img src="/user.png" alt="" />
          </Link>
        </div>
      )}
    </header>
  );
}

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
  isFetchingUser: selectIsFetchingUser,
});

export default connect(mapStateToProps)(Header);
