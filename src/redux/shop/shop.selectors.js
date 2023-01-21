import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectProducts = createSelector(
  [selectShop],
  (shop) => shop.products
);

export const selectProductsCount = createSelector(
  [selectShop],
  (shop) => shop.productsCount
);

export const selectIsFetchingProducts = createSelector(
  [selectShop],
  (shop) => shop.isFetchingProducts
);

export const selectSkip = createSelector([selectShop], (shop) => shop.skip);

export const selectHasMore = createSelector(
  [selectShop],
  (shop) => shop.hasMore
);
