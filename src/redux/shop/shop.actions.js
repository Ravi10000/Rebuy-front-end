import SHOP_ACTION_TYPES from "./shop.types";

export const updateProducts = (products) => ({
    type: SHOP_ACTION_TYPES.UPDATE_PRODUCTS,
    payload: products
});

export const initializeProducts = (productsInfo) => ({
    type: SHOP_ACTION_TYPES.INITIALIZE_PRODUCTS,
    payload: productsInfo
});

// export const fetchProductsStart = ()=>({
//     type: SHOP_ACTION_TYPES.FETCH_PRODUCTS_START
// })

// export const fetchProductsSuccess = productsMap=>({
//     type: SHOP_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS,
//     payload: productsMap
// })

// export const fetchProductsFailure = (err)=>({
//     type: SHOP_ACTION_TYPES.FETCH_PRODUCTS_FAILURE,
//     payload: err
// })