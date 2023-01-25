// import { useEffect} from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { Route, Redirect } from "react-router-dom";

function Protect({ currentUser, ...otherProps }) {
  if (!currentUser) {
    return <Redirect to="/signin" />;
  }
  return <Route {...otherProps} />;
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Protect);
