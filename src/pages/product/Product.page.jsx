import "./product.styles.scss";
import Btn from "../../components/btn/btn.component";
import { withRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProductById } from "../../utils/api";
import Spinner from "../../components/spinner/spinner.component";
import ImagesCarousel from "../../components/images-carousel/images-carousel.component";
import { keys } from "../../utils/product-info";
import ScrollToTop from "../../components/scroll-to-top/scroll-to-top.component";
import { addProductToCart } from "../../utils/api";
import {
  selectCurrentUser,
  selectIsFetchingUser,
} from "../../redux/user/user.selectors";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";
import { setFlash } from "../../redux/flash/flash.actions";
import { updateUser } from "../../redux/user/user.actions";

function ProductPage({
  match,
  history,
  currentUser,
  isFetchingUser,
  setFlash,
  updateUser,
}) {
  const [product, setProduct] = useState(null);
  const [showCart, setShowCart] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // console.log({ currentUser, isFetchingUser });
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
    if (!isFetchingUser && product) {
      if (!currentUser || currentUser.cart.includes(product._id)) {
        setShowCart(false);
      } else {
        setShowCart(true);
      }
    }
    (async function () {
      const response = await fetchProductById(match?.params.id);
      if (response.data) setProduct(response.data);
      else console.log(response.error);
    })();
  }, [isFetchingUser, currentUser, product]);

  async function handleAddToCart() {
    try {
      setIsLoading(true);
      const { data: user } = await addProductToCart({
        productId: product?._id,
      });
      setIsLoading(false);
      if (user.error) {
        setFlash({
          type: "error",
          message:
            "something went wrong, please reload the page and try again!",
        });
        return;
      }
      setFlash({
        type: "success",
        message: "added to cart",
      });
      updateUser(user);
    } catch (error) {
      console.log({ error });
      setFlash({
        type: "error",
        message: "something went wrong, please reload the page and try again!",
      });
    }
  }

  return (
    <div className="product-page">
      <ScrollToTop />
      {!product ? (
        <Spinner page />
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
                <p>{product?.ram + "gb/" + product?.storage + "gb"}</p>
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
              </div>
              <div className="buttons">
                <Btn>Buy Now</Btn>
                {showCart ? (
                  !isLoading ? (
                    <Btn __btn_secondary onClick={handleAddToCart}>
                      Add to cart
                    </Btn>
                  ) : (
                    <Spinner sm />
                  )
                ) : currentUser ? (
                  <p>Added to cart</p>
                ) : (
                  <Link to="/signin">
                    <p className="__link">
                      log in to <br />
                      add this item to cart
                    </p>
                  </Link>
                )}
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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isFetchingUser: selectIsFetchingUser,
});

const mapDispatchToProps = (dispatch) => ({
  setFlash: (flash) => dispatch(setFlash(flash)),
  updateUser: (user) => dispatch(updateUser(user)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProductPage));
