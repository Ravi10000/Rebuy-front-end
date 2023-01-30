import USER_ACTION_TYPES from "./user.types";
const INITIAL_STATE = {
  currentUser: null,
  isFetchingUser: true,
  purchaseList: [],
};

const UserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_ACTION_TYPES.ADD_PRODUCT_TO_PURCHASE_LIST:
      return { ...state, purchaseList: [...state.purchaseList, action.payload] };
    case USER_ACTION_TYPES.REMOVE_PRODUCT_FROM_PURCHASE_LIST:
      return {
        ...state,
        purchaseList: state.purchaseList.filter(
          (item) => item !== action.payload
        ),
      };
    case USER_ACTION_TYPES.SET_CURRENT_USER:
    case USER_ACTION_TYPES.SIGN_IN_USER:
    case USER_ACTION_TYPES.UPDATE_USER:
      return { ...state, currentUser: action.payload, isFetchingUser: false };
    case USER_ACTION_TYPES.FETCHING_USER:
      return { ...state, isFetchingUser: true };
    case USER_ACTION_TYPES.END_OF_FETCHING_USER:
      return { ...state, isFetchingUser: false };
    case USER_ACTION_TYPES.SIGN_OUT_USER:
      return { ...state, currentUser: null, isFetchingUser: false };
    default:
      return state;
  }
};

export default UserReducer;
