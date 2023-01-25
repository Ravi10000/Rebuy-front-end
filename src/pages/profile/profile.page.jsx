import "./profile.styles.scss";
import { connect } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import Spinner from "../../components/spinner/spinner.component";
import Btn from "../../components/btn/btn.component";
import { signOutUser } from "../../utils/api";
import { signOut } from "../../redux/user/user.actions";
import { useState } from "react";

function ProfilePage({ user, signOut }) {
  const [isLoading, setIsLoading] = useState(null);
  async function handleSignOut() {
    setIsLoading(true);
    try {
      const { data: user } = await signOutUser();
      setIsLoading(false);
      if (user.error) {
        return;
      }
      signOut();
    } catch (error) {
      console.log({ error });
    }
  }
  return (
    <>
      {!user ? (
        <Spinner page />
      ) : (
        <div className="profile-page">
          <div className="container">
            <h1>Profile Page</h1>
            <img src="/profile-img.png" alt="profile" />
            <div className="info-container">
              <p className="name">{user?.name}</p>
              <p className="email">{user?.username}</p>
              <p className="phone">{user?.["phone number"]}</p>
              <Btn onClick={handleSignOut} __isLoading={isLoading}>Sign out</Btn>
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
});
export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
