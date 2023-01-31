import "./checkout.styles.scss";

import {useEffect} from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectPurchaseList } from "../../redux/user/user.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item";
import { withRouter } from "react-router-dom";

function CheckoutPage({ purchaseList, history }) {
  console.log({ purchaseList });

  useEffect(() => {
    if (!purchaseList.length) {
      // history.push("/");
    }
  }, []);
  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      {purchaseList?.map((product) => (
        <CheckoutItem product={product} key={product.id} />
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  purchaseList: selectPurchaseList,
});

export default connect(mapStateToProps)(withRouter(CheckoutPage));
