import { createSelector } from "reselect";

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);

export const selectIsFetchingUser = createSelector(
  [selectUser],
  (user) => user.isFetchingUser
);

export const selectCart = createSelector([selectUser], (user) => user.cart);

export const selectPurchaseList = createSelector(
  [selectUser],
  (user) => user.purchaseList
);

export const selectPurchaseListTotal = createSelector([selectUser], (user) =>
  user.purchaseList.reduce(
    (accumalatedPrice, item) => accumalatedPrice + item.price,
    0
  )
);