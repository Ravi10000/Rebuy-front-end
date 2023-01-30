import "./checkout.styles.scss";

import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectPurchaseList } from "../../redux/user/user.selectors";

function CheckoutPage({ purchaseList }) {
  console.log({ purchaseList });
  return <div>CheckoutPage</div>;
}

const mapStateToProps = createStructuredSelector({
  purchaseList: selectPurchaseList,
});

export default connect(mapStateToProps)(CheckoutPage);
