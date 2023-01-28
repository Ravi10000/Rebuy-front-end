import "./input.styles.scss";

import { useState } from "react";

export default function Input({
  label,
  notRequired,
  error,
  register,
  ..._otherProps
}) {
  // if (_otherProps?.type) {
  const [show, setShow] = useState(false);
  function handleTooglePassword() {
    setShow((show) => !show);
  }
  // }
  return (
    <div className="input-container">
      <div className="input-with-toogle">
        <input
          className="input"
          required={notRequired ? false : true}
          {...register}
          {..._otherProps}
          type={
            _otherProps?.type === "password"
              ? show
                ? "text"
                : "password"
              : _otherProps?.type
          }
        />
        <label>{label}</label>
        {_otherProps?.type === "password" && (
          <div className="toogle-password" onClick={handleTooglePassword}>
            <p>{!show ? "show" : "hide"}</p>
          </div>
        )}
      </div>
      <p className="error">{error}</p>
    </div>
  );
}
