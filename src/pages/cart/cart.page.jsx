import "./cart.styles.scss";
import { getCartItems } from "../../utils/api";
import { useState, useEffect } from "react";
import CartList from "../../components/cart-list/cart-list.component";
import Spinner from "../../components/spinner/spinner.component";
import Btn from "../../components/btn/btn.component";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import ScrollToTop from "../../components/scroll-to-top/scroll-to-top.component";
import EmptyList from "../../components/empty-list/empty-list.component";

import {
  selectPurchaseList,
  selectPurchaseListTotal,
  selectCurrentUser,
} from "../../redux/user/user.selectors";
import TotalPrice from "../../components/total-price/total-price.component";

function CartPage({ purchaseList, purchaseListTotal, user }) {
  const [cartList, setCartList] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const rupee = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });

  useEffect(() => {
    (async function () {
      try {
        setIsFetching(true);
        const { data: cartItems } = await getCartItems();
        setCartList(cartItems);
        setIsFetching(false);
      } catch (error) {
        setIsFetching(false);
        console.log({ error });
      }
    })();
  }, [user]);

  return (
    <div className="cart-page">
      <ScrollToTop />
      <h1 className="__heading">My Cart</h1>
      {cartList && cartList?.length > 0 && (
        <h3 className="__heading colored">select items to buy</h3>
      )}
      {!cartList?.length && !isFetching && <EmptyList listName="cart" />}
      {isFetching ? (
        <Spinner page />
      ) : (
        <div className="container">
          <CartList list={cartList} />
          {purchaseList.length > 0 && (
            <div className="btn-container">
              <TotalPrice/>
              <Link to="/checkout">
                <Btn>Checkout</Btn>
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  purchaseList: selectPurchaseList,
  user: selectCurrentUser,
  purchaseListTotal: selectPurchaseListTotal,
});
export default connect(mapStateToProps)(CartPage);
