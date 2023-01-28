import { getCartItems } from "../../utils/api";
import "./cart.styles.scss";
import { useEffect } from "react";
import CartList from "../../components/cart-list/cart-list.component";

export default function CartPage() {
  useEffect(() => {
    (async function (){
      const {data: cartItems} = await getCartItems();
      console.log({cartItems});
    })()
    
  }, []);
  return <div className="cart-page">
    <h1>Cart</h1>
    <div className="container">
      <CartList/>
    </div>
  </div>;
}
