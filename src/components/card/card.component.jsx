import "./card.styles.scss";
// import Quality from "../quality/quality.component";
import { Link, withRouter } from "react-router-dom";
import { useState } from "react";
import Spinner from "../spinner/spinner.component";
import { removeProductFromCart } from "../../utils/api";
import { connect } from "react-redux";
import { updateUser } from "../../redux/user/user.actions";

function Card({
  product: { _id: id, brand, model, price, images },
  enableRemove,
  updateUser,
  history,
}) {
  const [isRemoving, setIsRemoving] = useState(false);
  async function handleRemoveItem() {
    try {
      setIsRemoving(true);
      const { data: user } = await removeProductFromCart(id);
      console.log({ user });
      setIsRemoving(false);
      if (user.error) {
        console.log(user.error);
        return;
      }
      updateUser(user);
      // history.goBack();
      window.location.reload(false);
    } catch (error) {
      setIsRemoving(false);
      console.log({ error });
    }
  }
  return (
    <div>
      <Link to={`/products/${id}`}>
        <div className="card">
          <img className="card-img" src={images?.[0]?.url} alt="" />
          <h4 className="card-name">{brand + " " + model}</h4>
          <div className="price-container">
            <p>Rs {price}</p>
          </div>
        </div>
      </Link>
      {enableRemove &&
        (isRemoving ? (
          <Spinner sm />
        ) : (
          <div className="remove-btn" onClick={handleRemoveItem}>
            remove from cart
          </div>
        ))}
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  updateUser: (user) => dispatch(updateUser(user)),
});

export default connect(null, mapDispatchToProps)(withRouter(Card));
