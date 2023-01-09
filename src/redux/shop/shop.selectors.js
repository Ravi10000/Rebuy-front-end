import {createSelector} from  'reselect'

const selectShop = state => state.shop;

export const selectProducts = createSelector(
    [selectShop],
    shop => shop.products
)

export const selectProductsCount = createSelector(
    [selectShop],
    shop => shop.productsCount
)