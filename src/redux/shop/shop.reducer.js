import SHOP_ACTION_TYPES from "./shop.types";

const INITIAL_STATE = {
    products : [],
    productsCount : 0
};

const ShopReducer = (state = INITIAL_STATE, action)=>{
    switch (action.type){
        case SHOP_ACTION_TYPES.INITIALIZE_PRODUCTS:
            return{
                ...state,
                products : action.payload.products,
                productsCount : action.payload.productsCount
            }
        case SHOP_ACTION_TYPES.UPDATE_PRODUCTS:
            return {
                ...state,
                products: action.payload,
            }
        default: return state
    }
}

export default ShopReducer