import "./profile.styles.scss";
import { connect } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import Spinner from "../../components/spinner/spinner.component";
import Btn from "../../components/btn/btn.component";
import { signOutUser } from "../../utils/api";
import { signOut } from "../../redux/user/user.actions";
import { useState } from "react";
import ScrollToTop from "../../components/scroll-to-top/scroll-to-top.component";
import { withRouter } from "react-router-dom";
import { setFlash } from "../../redux/flash/flash.actions";
import { Link } from "react-router-dom";

function ProfilePage({ user, signOut, setFlash, history }) {
  const [isLoading, setIsLoading] = useState(null);
  async function handleSignOut() {
    setIsLoading(true);
    try {
      const { data: user } = await signOutUser();
      setIsLoading(false);
      if (user.error) {
        return;
      }
      setFlash({
        type: "success",
        message: "signed out successfully!",
      });
      signOut();
      history.push("/signin");
    } catch (error) {
      console.log({ error });
    }
  }
  return (
    <>
      <ScrollToTop />
      {!user ? (
        <Spinner page />
      ) : (
        <div className="profile-page">
          <div className="container">
            <img src="/user.png" alt="profile" />
            <div className="info-container">
              <p className="name">{user?.name}</p>
              <p className="email">{user?.username}</p>
              <p className="phone">{user?.["phone number"]}</p>
              <div className="actions">
                <Link to="/cart">
                  <div className="cart-action">
                    <img src="/cart.png" alt="cart" />
                    <p>My Cart</p>
                  </div>
                </Link>
                <Link to="/orders">
                  <div className="order-action">
                    <img src="/orders.png" alt="order" />
                    <p>My Orders</p>
                  </div>
                </Link>
              </div>
              <div className="sign-out-action">
                {isLoading ? (
                  <Spinner sm spinnerColor="var(--error)" />
                ) : (
                  <p onClick={handleSignOut}>Sign out</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut()),
  setFlash: (flash) => dispatch(setFlash(flash)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProfilePage));
