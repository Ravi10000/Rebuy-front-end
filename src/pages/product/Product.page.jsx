import "./product.styles.scss";
import Btn from "../../components/btn/btn.component";
export default function ProductPage() {
  return (
    <div className="product-page">
      <div className="product-info-container">
        <div className="img-container"></div>
        <div className="info-container">
          <div className="title-container">
            <h2>Apple Iphone X</h2>
            <p>4gb/64gb</p>
          </div>
          <div className="quality">
            <p>Refurbished - good</p>
            <div className="img"></div>
          </div>
          <div className="device-color">
            <p>space gray</p>
            <div className="color-box" style={{backgroundColor: 'gray'}}></div>
          </div>
          <div className="price-container">
            <div className="price">Rs.22999</div>
            <div className="msg">only 3 left at this price</div>
          </div>
          <div className="buttons">
            <Btn>Buy Now</Btn>
            <Btn __btn_secondary>Add to cart</Btn>
          </div>
        </div>
      </div>
    </div>
  );
}
