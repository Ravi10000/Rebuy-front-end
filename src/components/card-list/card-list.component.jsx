import "./card-list.styles.scss";

import { useEffect, useState } from "react";

import { initializeProducts } from "../../redux/shop/shop.actions";
import { connect, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectProducts,
  selectProductsCount,
} from "../../redux/shop/shop.selectors";

import { fetchAllProducts } from "../../utils/api";

import Card from "../card/card.component";
import Spinner from "../spinner/spinner.component";

function CardList({ products, productsCount }) {
  const [isFetching, setIsFetching] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    (async function () {
      const data = await fetchAllProducts();
      dispatch(initializeProducts(data));
      setIsFetching(false)
    })();
  }, []);
  return (
    <>
      {isFetching ? (
        <Spinner />
      ) : (
        <div className="card-list">
          {products?.map((product) => (
            <Card key={product._id} product={product} />
          ))}
        </div>
      )}
    </>
  );
}
const mapStateToProps = createStructuredSelector({
  products: selectProducts,
  productsCount: selectProductsCount,
});

export default connect(mapStateToProps)(CardList);
