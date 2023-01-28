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
      window.location.reload(false);
    } catch (error) {
      setIsRemoving(false);
      console.log({ error });
    }
  }
  return (
    <div>
      <div className="card">
        <Link to={`/products/${id}`}>
          <div className="container">
            <img className="card-img" src={images?.[0]?.url} alt="" />
            <h4 className="card-name">{brand + " " + model}</h4>
            <div className="price-container">
              <p>Rs {price}</p>
            </div>
          </div>
        </Link>
        {enableRemove && (
          <div className="remove-btn-container">
            {isRemoving ? (
              <Spinner sm spinnerColor="var(--error)" />
            ) : (
              <>
                <div className="btn remove" onClick={handleRemoveItem}>
                  remove
                </div>
                <div className="btn select" onClick={handleRemoveItem}>
                  select
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  updateUser: (user) => dispatch(updateUser(user)),
});

export default connect(null, mapDispatchToProps)(withRouter(Card));
