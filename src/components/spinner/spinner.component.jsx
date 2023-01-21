import "./spinner.styles.scss";

export default function Spinner({ md, lg, sm }) {
  const spinnerStyles = {
    width: lg ? "50px" : md ? "35px" : "25px",
  };
  return (
    <div className="spinner-container">
      <div className="spinner" style={spinnerStyles}></div>
    </div>
  );
}
