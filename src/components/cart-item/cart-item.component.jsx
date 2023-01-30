import "./cart-item.styles.scss";
// import Quality from "../quality/quality.component";
import { Link, withRouter } from "react-router-dom";
import { useState } from "react";
import Spinner from "../spinner/spinner.component";
import { removeProductFromCart } from "../../utils/api";
import { connect } from "react-redux";
import {
  addProductToPurchaseList,
  removeProductFromPurchaseList,
  updateUser,
} from "../../redux/user/user.actions";

function CartItem({
  product: { _id: id, brand, model, price, ram, storage, images },
  enableRemove,
  updateUser,
  addProductToPurchaseList,
  removeProductFromPurchaseList,
  history,
}) {
  const [isRemoving, setIsRemoving] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  async function handleRemoveItem() {
    try {
      setIsRemoving(true);
      if (isSelected) {
        removeProductFromPurchaseList(id);
        setIsSelected(false);
      }
      const { data: user } = await removeProductFromCart(id);
      console.log({ user });
      setIsRemoving(false);
      if (user.error) {
        console.log(user.error);
        return;
      }
      updateUser(user);
      window.location.reload(false);
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
    addProductToPurchaseList(id);
  }
  return (
    <div>
      <div className="cart">
        <div className="container">
          <img className="cart-img" src={images?.[0]?.url} alt="" />
          <h4 className="cart-name">{brand + " " + model}</h4>
          <p className="ram-storage">{ram + "GB /" + storage + "GB"}</p>
          <div className="price-container">
            <p>Rs {price}</p>
          </div>
        </div>
        {isRemoving ? (
          <Spinner sm spinnerColor="var(--error)" />
        ) : (
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
            <div className="btn remove" onClick={handleRemoveItem}>
              remove
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  updateUser: (user) => dispatch(updateUser(user)),
  addProductToPurchaseList: (productId) =>
    dispatch(addProductToPurchaseList(productId)),
  removeProductFromPurchaseList: (productId) =>
    dispatch(removeProductFromPurchaseList(productId)),
});

export default connect(null, mapDispatchToProps)(withRouter(CartItem));
