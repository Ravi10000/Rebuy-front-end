import USER_ACTION_TYPES from "./user.types";

export const signIn = (user) => ({
  type: USER_ACTION_TYPES.SIGN_IN_USER,
  payload: user,
});

export const signOut = () => ({
  type: USER_ACTION_TYPES.SIGN_OUT_USER,
});

export const updateUser = (user) => ({
  type: USER_ACTION_TYPES.UPDATE_USER,
  payload: user,
});

export const setCurrentUser = (user) => ({
  type: USER_ACTION_TYPES.SET_CURRENT_USER,
  payload: user,
});

export const startFetchingUser = () => ({
  type: USER_ACTION_TYPES.FETCHING_USER,
});

export const endOfFetchingUser = () => ({
  type: USER_ACTION_TYPES.END_OF_FETCHING_USER,
});

export const addProductToPurchaseList = (productId) => ({
  type: USER_ACTION_TYPES.ADD_PRODUCT_TO_PURCHASE_LIST,
  payload: productId,
});
export const removeProductFromPurchaseList = (productId) => ({
  type: USER_ACTION_TYPES.REMOVE_PRODUCT_FROM_PURCHASE_LIST,
  payload: productId,
});
export const addProductToCart = (productId) => ({
  type: USER_ACTION_TYPES.ADD_PRODUCT_TO_CART,
  payload: productId,
});
export const removeProductFromCart = (productId) => ({
  type: USER_ACTION_TYPES.REMOVE_PRODUCT_FROM_CART,
  payload: productId,
});
