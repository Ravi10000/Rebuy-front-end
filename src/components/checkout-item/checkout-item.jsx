import "./checkout-item.styles.scss";
import React from "react";

function CheckoutItem({ product:{id,images, brand, model, ram, storage, price} }) {
  return (
    <div className="checkout-item">
      <img src={images?.[0]?.url} alt="" />
      <p>{brand + ' ' + model}</p>
    </div>
  );
}

export default CheckoutItem;
