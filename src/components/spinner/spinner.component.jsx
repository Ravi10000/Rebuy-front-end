import "./spinner.styles.scss";

export default function Spinner({ md, sm, page }) {
  const spinnerStyles = {
    width: sm ? "25px" : md ? "35px" : "50px",
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
