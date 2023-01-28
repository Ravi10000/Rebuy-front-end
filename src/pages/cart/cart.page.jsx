import { getCartItems } from "../../utils/api";
import "./cart.styles.scss";
import { useState, useEffect } from "react";
import CartList from "../../components/cart-list/cart-list.component";
export default function CartPage() {
  const [cartList, setCartList] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        setIsFetching(true);
        const { data: cartItems } = await getCartItems();
        console.log({ cart: cartItems });
        setCartList(cartItems);
        setIsFetching(false);
      } catch (error) {
        setIsFetching(false);
        console.log({ error });
      }
    })();
  }, []);
  return (
    <div className="cart-page">
      <h1>Cart</h1>
      <div className="container">
        <CartList list={cartList} />
      </div>
    </div>
  );
}
