import "./cart-item.styles.scss";
// import Quality from "../quality/quality.component";
import { Link, withRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import Spinner from "../spinner/spinner.component";
import { removeProductFromCart } from "../../utils/api";
import { connect } from "react-redux";
import {
  addProductToPurchaseList,
  removeProductFromPurchaseList,
  addProductToCart,
  removeProductFromCart as removeProductFromCartInClient,
  updateUser,
} from "../../redux/user/user.actions";
import { createStructuredSelector } from "reselect";
import { selectPurchaseList } from "../../redux/user/user.selectors";

function CartItem({
  product,
  enableRemove,
  updateUser,
  addProductToPurchaseList,
  removeProductFromPurchaseList,
  addProductToCart,
  removeProductFromCartInClient,
  history,
  purchaseList,
  setCartList,
}) {
  const { _id: id, brand, model, price, ram, storage, images } = product;
  const [isRemoving, setIsRemoving] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const rupee = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });

  useEffect(() => {
    purchaseList.forEach((item) => {
      if (item.id === id) setIsSelected(true);
    });
  }, [purchaseList]);

  async function handleRemoveItem() {
    try {
      setIsRemoving(true);
      const { data: user } = await removeProductFromCart(id);
      if (isSelected) {
        removeProductFromPurchaseList(id);
        setIsSelected(false);
      }
      removeProductFromCartInClient(id);
      setCartList((list) => list.filter((item) => item._id !== id));
      console.log({ user });
      setIsRemoving(false);
      if (user.error) {
        console.log(user.error);
        return;
      }
      updateUser(user);
      // window.location.reload(false);
    } catch (error) {
      setIsRemoving(false);
      console.log({ error });
    }
  }

  function handleSelect() {
    if (isSelected) {
      // setPurchaseList((list) => list.filter((item) => id !== item));
      removeProductFromPurchaseList(id);
      setIsSelected(false);
      return;
    }
    setIsSelected(true);
    addProductToPurchaseList({ id, brand, model, price, ram, storage, images });
  }
  return (
    <div>
      <div className={`cart ${isSelected && "selected"}`}>
        <div className="container" onClick={handleSelect}>
          <img className="cart-img" src={images?.[0]?.url} alt="" />
          <h4 className="cart-name">{brand + " " + model}</h4>
          <p className="ram-storage">{ram + "GB /" + storage + "GB"}</p>
          <div className="price-container">
            <p>{rupee.format(price)}</p>
          </div>
        </div>

        <div className="actions-container">
          <Link to={`/products/${id}`}>
            <div className="btn product">Go to product page</div>
          </Link>
          <div
            className={`btn select ${isSelected && "selected"}`}
            onClick={handleSelect}
          >
            {isSelected ? "selected" : "select"}
          </div>
          {isRemoving ? (
            <Spinner sm spinnerColor="var(--error)" />
          ) : (
            <div className="btn remove" onClick={handleRemoveItem}>
              remove
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  purchaseList: selectPurchaseList,
});
const mapDispatchToProps = (dispatch) => ({
  updateUser: (user) => dispatch(updateUser(user)),
  addProductToPurchaseList: (productId) =>
    dispatch(addProductToPurchaseList(productId)),
  removeProductFromPurchaseList: (productId) =>
    dispatch(removeProductFromPurchaseList(productId)),
  addProductToCart: (productId) => dispatch(addProductToCart(productId)),
  removeProductFromCartInClient: (productId) =>
    dispatch(removeProductFromCartInClient(productId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CartItem));
