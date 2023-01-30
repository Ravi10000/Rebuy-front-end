import "./checkout-item.styles.scss";
import React from "react";

function CheckoutItem({product}) {
  return <div className="checkout-item">
    <h1>{product}</h1>
  </div>;
}

export default CheckoutItem;
