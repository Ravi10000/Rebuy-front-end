import "./spinner.styles.scss";

export default function Spinner({ md, sm }) {
  const spinnerStyles = {
    width: sm ? "25px" : md ? "35px" : "50px",
  };
  return (
    <div className="spinner-container">
      <div className="spinner" style={spinnerStyles}></div>
    </div>
  );
}
