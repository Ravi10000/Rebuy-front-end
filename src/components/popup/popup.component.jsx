import "./popup.styles.scss";
import { useState, useEffect } from "react";

import { connect } from "react-redux";

import { clearFlash } from "../../redux/flash/flash.actions";
const PopUp = ({ message, type, clearFlash }) => {
  const [hidePopup, togglePopup] = useState(false);
  const [count, setCount] = useState(5);
  useEffect(() => {
    setTimeout(function () {
      togglePopup(true);
      clearFlash();
    }, 5000);
    setInterval(() => {
      setCount((count) => count - 1);
    }, 999);
  }, [clearFlash]);
  return (
    <div
      className={`popup ${type}`}
      style={{
        display: hidePopup && "none",
        boxShadow: `0px 0px 1px var(--${type})`,
      }}
      onClick={() => {
        togglePopup(false);
      }}
    >
      {message && (
        <>
          <img src={`/${type}.png`} alt={type} />
          <p>{message}</p>
          <div className="count">{count}</div>
        </>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearFlash: () => dispatch(clearFlash()),
});

export default connect(null, mapDispatchToProps)(PopUp);
