// styles
import CartItem from "../cart-item/cart-item.component";
import "./cart-list.styles.scss";

const CartList = ({ list }) => {
  return (
    <>
      <div className="cart-list">
        {list &&
          list?.map((product) => (
            <CartItem
              key={product._id}
              product={product}
            />
          ))}
      </div>
      {/* {list?.length > 0 ? (
        ""
      ) : (
        <div className="empty-cart">
          <img src="/sorry.png" alt="empty-cart" />
          <p>nothing is in your cart</p>
        </div>
      )} */}
    </>
  );
};

export default CartList;
