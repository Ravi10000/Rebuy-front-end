// styles
import Card from "../card/card.component";
import "./cart-list.styles.scss";

const CartList = ({ list }) => {
  return (
    <div className="cart-list">
      {list && list?.map((product) => (
        <Card key={product._id} product={product} enableRemove/>
      ))}
    </div>
  );
};

export default CartList;
