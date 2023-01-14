import "./header.styles.scss";
import Logo from "../logo/logo.component";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
function Header({ user }) {
  return (
    <header>
      <div className="logo-container">
        <Link to="/">
          <Logo />
        </Link>
      </div>
    </header>
  );
}

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
});

export default connect(mapStateToProps)(Header);
