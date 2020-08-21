import * as types from "../constants/actionTypes";


const initialState = { data: null };

export const mainReducer = (state = initialState, action) => {
    console.log("loginReducer", action);

    if(action.type === types.LOGIN) {
        return {
            ...state,
            data: action
        }
    } else if(action.type === types.REGISTRATION) {
        return {
            ...state,
            data: action
        }
    } else if(action.type === types.RESET_PASSWORD) {
        return {
            ...state,
            data: action
        }
    } else if(action.type === types.ADD_SEGMENT) {
        return {
            ...state,
            data: action
        }
    } else if(action.type === types.GET_SEGMENTS) {
        return {
            ...state,
            data: action
        }
    } else if(action.type === types.UPDATE_SEGMENT) {
        return {
            ...state,
            data: action
        }
    } else if(action.type === types.GET_USER_DATA) {
        return {
            ...state,
            data: action
        }
    }
    else {
        return state;
    }
}