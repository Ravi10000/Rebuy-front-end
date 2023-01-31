import "./checkout.styles.scss";

import { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectPurchaseList } from "../../redux/user/user.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item";
import { withRouter } from "react-router-dom";
import EmptyList from "../../components/empty-list/empty-list.component";
import ScrollToTop from "../../components/scroll-to-top/scroll-to-top.component";
import TotalPrice from "../../components/total-price/total-price.component";
import Btn from "../../components/btn/btn.component";

function CheckoutPage({ purchaseList, history }) {
  function handlePlaceOrder() {
    const items = purchaseList.map(item => item.id)
    console.log({items});
  }

  return (
    <div className="checkout-page">
      <ScrollToTop />
      <h1 className="__heading">Checkout</h1>
      <div className="checkout-list">
        {purchaseList?.map((product) => (
          <CheckoutItem product={product} key={product.id} />
        ))}
      </div>
      {!purchaseList.length && <EmptyList listName="checkout list" />}
      <div className="price-btn-container">
        <TotalPrice />
        <Btn onClick={handlePlaceOrder}>Place Order</Btn>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  purchaseList: selectPurchaseList,
});

export default connect(mapStateToProps)(withRouter(CheckoutPage));
