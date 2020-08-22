import * as types from '../constants/actionTypes';


// export const login = result => ({
//     type: types.LOGIN,
//     payload: result,
// });
//
// export const registration = result => ({
//     type: types.REGISTRATION,
//     payload: result,
// });
//
// export const reset_password = result => ({
//     type: types.RESET_PASSWORD,
//     payload: result,
// });

// export const add_segment = (result) => ({
//     type: types.ADD_SEGMENT,
//     payload: result,
// });

export const get_segments = (result) => ({
    type: types.GET_SEGMENTS,
    payload: result,
});

export const update_segment = (result) => ({
    type: types.UPDATE_SEGMENT,
    payload: result,
});

export const get_user_data = (result) => ({
    type: types.GET_USER_DATA,
    payload: result,
});
