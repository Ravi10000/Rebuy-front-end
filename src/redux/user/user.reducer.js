import USER_ACTION_TYPES from "./user.types"
const INITIAL_STATE = null

const UserReducer = (state = INITIAL_STATE, action)=>{
    switch (action.type){
        case USER_ACTION_TYPES.SET_CURRENT_USER:
        case USER_ACTION_TYPES.SIGN_IN_USER:
        case USER_ACTION_TYPES.UPDATE_USER:
            return action.payload || null
        case USER_ACTION_TYPES.SIGN_OUT_USER:
            return null
        default: return state
    }
}

export default UserReducer