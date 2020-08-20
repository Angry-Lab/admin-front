import {
    LOGIN
} from "../actions";


const initialState = { isLoading: false, data: null };

export const loginReducer = (state = initialState, action) => {
    console.log(action);
    const { type, payload } = action;

    switch (type) {
        case LOGIN: {
            return {
                ...state,
                data: payload,
            }
        }
        default:
            return state;
    }
};