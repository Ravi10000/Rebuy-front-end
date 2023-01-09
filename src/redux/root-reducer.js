import {combineReducers} from 'redux';
import ShopReducer from './shop/shop.reducer';
import UserReducer from './user/user.reducer';
import FlashReducer from './flash/flash.reducer';

const rootReducer = combineReducers({
    shop: ShopReducer,
    user: UserReducer,
    flash: FlashReducer
})

export default rootReducer