import { useState, useEffect } from "react";
import "./btn.styles.scss";

export default function Btn({
  __styles,
  __btn_secondary,
  __isloading,
  // __handleClick,
  children,
  ...__otherProps
}) {
  const [custom_styles, setStyles] = useState({});

  useEffect(() => {
    __styles && setStyles(__styles);
  }, [setStyles, __styles]);

  return (
    <button
      className={`btn ${__btn_secondary && "btn-secondary"}`}
      style={{
        ...custom_styles,
        display: __isloading ? "flex" : "inline-block",
      }}
      // onClick={() => {
      //   __handleClick && __handleClick();
      // }}
      {...__otherProps}
    >
      {children}
      {__isloading && <div className="button-spinner"></div>}
    </button>
  );
}
