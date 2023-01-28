// import { useEffect} from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCurrentUser,
  selectIsFetchingUser,
} from "../../redux/user/user.selectors";
import { Route, Redirect } from "react-router-dom";
import Spinner from "../spinner/spinner.component";

function Protect({ currentUser, isFetchingUser, ...otherProps }) {
  return (
    <>
      {isFetchingUser ? (
        <Spinner page />
      ) : !currentUser ? (
        <Redirect to="/signin" />
      ) : (
        <Route {...otherProps} />
      )}
    </>
  );
  // if (!currentUser) {
  //   return <Redirect to="/signin" />;
  // }
  // return <Route {...otherProps} />;
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isFetchingUser: selectIsFetchingUser,
});

export default connect(mapStateToProps)(Protect);
