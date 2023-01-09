import USER_ACTION_TYPES from "./user.types";

export const signIn = user => ({
  type: USER_ACTION_TYPES.SIGN_IN_USER,
  payload: user
});

export const signOut = () => ({
  type: USER_ACTION_TYPES.SIGN_OUT_USER
});

export const updateUser = user => ({
  type: USER_ACTION_TYPES.UPDATE_USER,
  payload: user
});

export const fetchUserStart = () => ({
  type: USER_ACTION_TYPES.FETCH_USER_START
});

// export const fetchUserSuccess = user=>({
//     type: USER_ACTION_TYPES.FETCH_USER_SUCCESS,
//     payload: user
// })

export const fetchUserFailure = err => ({
  type: USER_ACTION_TYPES.FETCH_USER_FAILURE,
  payload: err
});

export const signOutUserStart = res => ({
  type: USER_ACTION_TYPES.SIGNOUT_USER_START
});

export const signOutUserSuccess = () => ({
  type: USER_ACTION_TYPES.SIGNOUT_USER_SUCCESS
});

export const signOutUserFailure = err => ({
  type: USER_ACTION_TYPES.SIGNOUT_USER_FAILURE,
  payload: err
});

export const updateUserStart = userInfo => ({
  type: USER_ACTION_TYPES.UPDATE_USER_START,
  payload: userInfo
});
// export const updateUserSuccess = (user)=>({
//     type: USER_ACTION_TYPES.UPDATE_USER_SUCCESS,
//     payload: user
// })

export const updateUserFailure = err => ({
  type: USER_ACTION_TYPES.UPDATE_USER_FAILURE,
  payload: err
});

export const setCurrentUser = user => ({
  type: USER_ACTION_TYPES.SET_CURRENT_USER,
  payload: user
});
