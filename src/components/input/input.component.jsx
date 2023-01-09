import "./input.styles.scss";

import React from "react";

export default function Input({label, notRequired, error, register, ..._otherProps }) {
  return (
    <div className="input-container">
      <input
        className="input"
        required={notRequired ? false : true}
        {...register}
        {..._otherProps}
      />
      <label>{label}</label>
      <p className="error">{error}</p>
    </div>
  );
}
