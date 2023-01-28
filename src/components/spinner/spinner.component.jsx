import "./spinner.styles.scss";

export default function Spinner({ md, sm, page, spinnerColor }) {
  const spinnerColorStyles = spinnerColor || "var(--primary-clr)";
  const spinnerStyles = {
    width: sm ? "25px" : md ? "35px" : "50px",
    borderTopColor: spinnerColorStyles,
    borderLeftColor: spinnerColorStyles,
  };
  return (
    <div
      className="spinner-container"
      style={{ height: page ? "100vh" : "100%" }}
    >
      <div className="spinner" style={spinnerStyles}></div>
    </div>
  );
}
