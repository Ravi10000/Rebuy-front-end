import "./header.styles.scss";
import Logo from "../logo/logo.component";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCurrentUser,
  selectIsFetchingUser
} from "../../redux/user/user.selectors";
import Btn from "../btn/btn.component";
import Spinner from "../spinner/spinner.component";

function Header({ user, isFetchingUser }) {
  console.log(isFetchingUser);
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
          <Link to="/signin">
            <Btn>Log in</Btn>
          </Link>
        </div>
      ) : (
        <div className="logged-in">
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
