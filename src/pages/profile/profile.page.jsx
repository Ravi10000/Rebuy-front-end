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
        type: 'success',
        message: "signed out successfully!"
      })
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
            <img src="/profile-img.png" alt="profile" />
            <div className="info-container">
              <p className="name">{user?.name}</p>
              <p className="email">{user?.username}</p>
              <p className="phone">{user?.["phone number"]}</p>
              <div className="sign-out">
                {isLoading ? (
                  <Spinner sm />
                ) : (
                  <a className="__link" onClick={handleSignOut}>
                    Sign out
                  </a>
                )}
                <div className="spinner"></div>
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
