import "./total-price.styles.scss";
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectPurchaseListTotal } from "../../redux/user/user.selectors";

const TotalPrice = ({ purchaseListTotal }) => {
  const rupee = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });
  return (
    <div className="total-price">
      Total = {purchaseListTotal ? rupee.format(purchaseListTotal) : 0}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  purchaseListTotal: selectPurchaseListTotal,
});
export default connect(mapStateToProps)(TotalPrice);
