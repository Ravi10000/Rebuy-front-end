import "./card.styles.scss";
// import Quality from "../quality/quality.component";
import {Link} from 'react-router-dom'

export default function Card({ product: { _id: id, brand, model, price, images } }) {
  return (
    <Link to={`/products/${id}`}>
      <div className="card">
      <img className="card-img" src={images?.[0]?.url} alt="" />
      <h4 className="card-name">{brand + " " + model}</h4>
      <div className="price-container">
        <p>Rs {price}</p>
      </div>
    </div>
    </Link>
  );
}
