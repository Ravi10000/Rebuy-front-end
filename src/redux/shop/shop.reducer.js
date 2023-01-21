import SHOP_ACTION_TYPES from "./shop.types";

const INITIAL_STATE = {
  products: [],
  productsCount: 0,
  isFetchingProducts: true,
  skip: 0,
  hasMore: true,
};

const ShopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOP_ACTION_TYPES.FETCHING_PRODUCTS:
      return {
        ...state,
        isFetchingProducts: true,
      };
    case SHOP_ACTION_TYPES.INITIALIZE_PRODUCTS:
      const { productsCount, products } = action.payload;
      return {
        ...state,
        isFetchingProducts: false,
        products,
        productsCount,
        hasMore: productsCount != products.length || false,
        skip: products.length,
      };
    case SHOP_ACTION_TYPES.UPDATE_PRODUCTS:
      const { length } = action.payload;
      return {
        ...state,
        skip: length,
        hasMore: state.productsCount != length || false,
        isFetchingProducts: false,
        products: action.payload,
      };
    default:
      return state;
  }
};

export default ShopReducer;
