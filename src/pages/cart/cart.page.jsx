import { getCartItems } from "../../utils/api";
import "./cart.styles.scss";
import { useEffect } from "react";

export default function CartPage() {
  useEffect(() => {
    (async function (){
      const {data: cartItems} = await getCartItems();
      console.log({cartItems});
    })()
    
  }, []);
  return <div className="cart-page">CartPage</div>;
}
