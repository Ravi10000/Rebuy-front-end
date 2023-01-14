import React from "react";
import "./profile.styles.scss";
import { connect } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";

function ProfilePage({user}) {
    console.log(user);
  return (
    <div className="profile-page">
      <div className="container">
        <h1>Profile Page</h1>
        <img src="/profile-img.png" alt="profile" />
        <div className="info-container">
            <p className="name">{user?.name}</p>
            <p className="email">{user?.username}</p>
            <p className="phone">{user?.["phone number"]}</p>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser,
})

export default connect(mapStateToProps)(ProfilePage)