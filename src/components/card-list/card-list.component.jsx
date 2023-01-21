// styles
import "./card-list.styles.scss";

// react imports
import { useEffect, useState } from "react";

// package imports
import { connect, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";

// actions
import {
  // initializeProducts,
  updateProducts,
  initiateFetching,
} from "../../redux/shop/shop.actions";

// selectors
import {
  selectProducts,
  selectProductsCount,
  selectIsFetchingProducts,
  selectSkip,
  selectHasMore,
} from "../../redux/shop/shop.selectors";

// api imports
import { fetchMoreProducts } from "../../utils/api";

// components
import Card from "../card/card.component";
import Spinner from "../spinner/spinner.component";
import Btn from "../btn/btn.component";

function CardList({
  products,
  productsCount,
  skip,
  hasMore,
  initiateFetching,
  isFetchingProducts,
  // initializeProducts,
  updateProducts,
}) {
  // const [isFetching, setIsFetching] = useState(true);
  // const [hasMoreProducts, setHasMoreProducts] = useState(true);
  // const [skip, setSkip] = useState(0);

  // useEffect(() => {
  //   (async function () {
  //     const { data } = await fetchAllProducts();
  //     const currentProductsCount = data?.products?.length;
  //     console.log(currentProductsCount);
  //     setSkip(currentProductsCount || 0);
  //     initializeProducts(data);
  //     setIsFetching(false);
  //   })();
  // }, []);

  async function handleFetchingMoreProducts() {
    initiateFetching();
    const { data } = await fetchMoreProducts({ skip, limit: 6 });
    // console.log({ moreProducts: data });
    // setSkip((prevSkip) => prevSkip + 10);

    if (data?.error) {
      // setHasMoreProducts(false);
      return;
    }

    updateProducts([...products, ...data?.products]);
    // console.log([...products, ...data?.products]);
    // const totalProductsCount = products?.length + data?.products?.length;
    // if (totalProductsCount >= productsCount) {
    //   // setHasMoreProducts(false);
    //   return;
    // }

    // setSkip(totalProductsCount);
  }
  return (
    <>
      {products && (
        <div className="card-list">
          {products?.map((product) => (
            <Card key={product._id} product={product} />
          ))}
        </div>
      )}
      {isFetchingProducts ? (
        <Spinner md />
      ) : !hasMore ? (
        <p className="end-msg">you've seen it all.</p>
      ) : (
        <p className="__link" onClick={handleFetchingMoreProducts}>
          show more
        </p>
      )}
    </>
  );
}
const mapStateToProps = createStructuredSelector({
  products: selectProducts,
  productsCount: selectProductsCount,
  isFetchingProducts: selectIsFetchingProducts,
  skip: selectSkip,
  hasMore: selectHasMore,
});

const mapDispatchToProps = (dispatch) => ({
  initiateFetching: () => dispatch(initiateFetching()),
  initializeProducts: (productsInfo) =>
    dispatch(initializeProducts(productsInfo)),
  updateProducts: (products) => dispatch(updateProducts(products)),
});
export default connect(mapStateToProps, mapDispatchToProps)(CardList);
