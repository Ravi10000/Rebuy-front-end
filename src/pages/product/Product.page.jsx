import "./product.styles.scss";
import Btn from "../../components/btn/btn.component";
import { withRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProductById } from "../../utils/api";
import Spinner from "../../components/spinner/spinner.component";
import ImagesCarousel from "../../components/images-carousel/images-carousel.component";
import { keys } from "../../utils/product-info";
import ScrollToTop from "../../components/scroll-to-top/scroll-to-top.component";

function ProductPage({ match, history }) {
  const [product, setProduct] = useState(null);
  const values = [
    product?.brand,
    product?.model,
    product?.color,
    `${product?.ram} gb`,
    `${product?.storage} gb`,
    `rs ${product?.price}`,
    product?.os,
    `${product?.["battery capacity"]} mAh`,
    `${product?.["front camera"]} megapixels`,
    `${product?.["back camera"]} megapixels`,
    product?.chipset,
    product?.cpu,
    product?.gpu,
  ];
  useEffect(() => {
    (async function () {
      const response = await fetchProductById(match?.params.id);
      if (response.data) setProduct(response.data);
      else console.log(response.error);
    })();
  }, []);
  return (
    <div className="product-page">
      <ScrollToTop />
      {!product ? (
        <Spinner page/>
      ) : (
        <>
          <div className="product-info-container">
            <div className="img-container">
              {product?.images?.length > 1 ? (
                <ImagesCarousel images={product?.images} />
              ) : (
                <img src={product?.images?.[0]?.url} alt="product" />
              )}
            </div>
            <div className="info-container">
              <div className="title-container">
                <h2>Apple Iphone X</h2>
                <p>{product?.ram + 'gb/' + product?.storage + 'gb'}</p>
              </div>
              <div className="quality">
                <p>Refurbished - {product?.quality.toUpperCase()}</p>
                {/* <div className="img"></div> */}
              </div>
              <div className="device-color">
                <p>{product?.color}</p>
                <div
                  className="color-box"
                  style={{ backgroundColor: product?.color }}
                ></div>
              </div>
              <div className="price-container">
                <div className="price">Rs.{product?.price} only</div>
                {/* <div className="msg">only 3 left at this price</div> */}
              </div>
              <div className="buttons">
                <Btn>Buy Now</Btn>
                <Btn __btn_secondary>Add to cart</Btn>
              </div>
            </div>
          </div>
          <div className="specs-container">
            <h2>Specifications</h2>
            <table className="specs">
              <tbody>
                {keys.map((key, index) => {
                  return (
                    <tr key={key}>
                      <th>{key}</th>
                      <td>{values[index]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

export default withRouter(ProductPage);
