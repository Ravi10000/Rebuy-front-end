import "./card.styles.scss";
// import Quality from "../quality/quality.component";
import { Link } from "react-router-dom";

function Card({
  product: { _id: id, brand, ram, storage, model, price, images },
}) {
  return (
    <Link to={`/products/${id}`}>
      <div className="card">
        {/* <div className="container"> */}
        <img className="card-img" src={images?.[0]?.url} alt="" />
        <h4 className="card-name">{brand + " " + model}</h4>
        <p className="ram-storage">{ram + "GB /" + storage + "GB"}</p>
        <div className="price-container">
          <p>Rs {price}</p>
          {/* </div> */}
        </div>
      </div>
    </Link>
  );
}

export default Card;
