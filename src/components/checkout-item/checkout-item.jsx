import "./checkout-item.styles.scss";
import React from "react";
import { connect } from "react-redux";
import { removeProductFromPurchaseList } from "../../redux/user/user.actions";

function CheckoutItem({
  product: { id, images, brand, model, ram, storage, price },
  removeProductFromPurchaseList,
}) {
  const rupee = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });

  function handleRemoveFromCheckout() {
    removeProductFromPurchaseList(id);
  }
  return (
    <div className="checkout-item">
      <img src={images?.[0]?.url} alt="" />
      <div className="info">
        <p>{brand + " " + model}</p>
        <p>
          {ram} GB/{storage}GB
        </p>
      </div>
      <p>{rupee.format(price)}</p>
      <div className="btn remove" onClick={handleRemoveFromCheckout}>
        remove
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  removeProductFromPurchaseList: (productId) =>
    dispatch(removeProductFromPurchaseList(productId)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
