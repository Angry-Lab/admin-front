import {
    BASE_API_URL,
    LOGIN_PATH,
} from "../constants/auth";
import {
    login
} from "../actions";

export const loginRequest = (email, password) => async dispatch => {
    try {
        // do request
        const url = BASE_API_URL + LOGIN_PATH;
        const body = JSON.stringify({
            login: email,
            password: password,
        });

        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'post',
            body,
        });
        const result = await response.json();

        // todo: здесь надо анализировать респонс на ошибки
        dispatch(login(result))
    } catch (e) {
        // display error message
        // dispatch(...)
    }
};