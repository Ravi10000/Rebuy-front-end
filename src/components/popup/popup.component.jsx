import "./popup.styles.scss";
import { useState, useEffect } from "react";

import { connect } from "react-redux";

import { clearFlash } from "../../redux/flash/flash.actions";
const PopUp = ({ message, type, clearFlash }) => {
  const [hidePopup, togglePopup] = useState(false);

  useEffect(() => {
    setTimeout(function () {
      togglePopup(true);
      clearFlash();
    }, 5000);
  }, [clearFlash]);
  return (
    <div
      className={`popup ${type}`}
      style={{ display: hidePopup && "none" }}
      onClick={() => {
        togglePopup(true);
      }}
    >
      {message && (
        <div className="popup-msg">
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearFlash: () => dispatch(clearFlash()),
});

export default connect(null, mapDispatchToProps)(PopUp);
