import * as urls from "../constants/urls";
import * as actions from "../actions";


export const loginRequest = (email, password) => async dispatch => {
    console.log("loginRequest")
    try {
        // do request
        const url = urls.BASE_API_URL + urls.LOGIN_PATH;
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

        //check response on errors
        if (result === 500) {
            console.log("error 500")
        }
        dispatch(actions.login(result))
    } catch (e) {
        // display error message
        // dispatch(...)
    }
};


export const registrationRequest = (firstName, secondName, email, password) => async dispatch => {
    console.log("registrationRequest")
    try {
        // do request
        const url = urls.BASE_API_URL + urls.REGISTRATION_PATH;
        const body = JSON.stringify({
            firstName: firstName,
            secondName: secondName,
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

        //check response on errors
        if (result === 500) {
            console.log("error 500")
        }
        dispatch(actions.login(result))
    } catch (e) {
        // display error message
        // dispatch(...)
    }
};


export const resetPasswordRequest = (email) => async dispatch => {
    console.log("resetPasswordRequest")
    try {
        // do request
        const url = urls.BASE_API_URL + urls.RESET_PASSWORD_PATH;
        const body = JSON.stringify({
            login: email,
        });

        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'post',
            body,
        });
        const result = await response.json();

        //check response on errors
        if (result === 500) {
            console.log("error 500")
        }
        dispatch(actions.login(result))
    } catch (e) {
        // display error message
        // dispatch(...)
    }
};

//TODO: nice?
export const addSegmentRequest = (add_segment) => async dispatch => {
    console.log("addSegmentRequest")
    try {
        // do request
        const url = urls.BASE_API_URL + urls.ADD_SEGMENT_PATH;
        const body = JSON.stringify({
            add_segment: add_segment,
        });

        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'post',
            body,
        });
        const result = await response.json();

        //check response on errors
        if (result === 500) {
            console.log("error 500")
        }
        dispatch(actions.login(result))
    } catch (e) {
        // display error message
        // dispatch(...)
    }
};

//TODO: it is GET request. have specifics
export const getSegmentsRequest = (email, password) => async dispatch => {
    console.log("getSegmentsRequest")
    try {
        // do request
        const url = urls.BASE_API_URL + urls.GET_SEGMENTS_PATH;
        const body = JSON.stringify({
            login: email,
            password: password,
        });

        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'get',
            body,
        });
        const result = await response.json();

        //check response on errors
        if (result === 500) {
            console.log("error 500")
        }
        dispatch(actions.login(result))
    } catch (e) {
        // display error message
        // dispatch(...)
    }
};


export const updateSegmentRequest = (email, password) => async dispatch => {
    console.log("updateSegmentRequest")
    try {
        // do request
        const url = urls.BASE_API_URL + urls.UPDATE_SEGMENT_PATH;
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

        //check response on errors
        if (result === 500) {
            console.log("error 500")
        }
        dispatch(actions.login(result))
    } catch (e) {
        // display error message
        // dispatch(...)
    }
};

//TODO: it is GET request. have specifics
export const getUserDataRequest = (email, password) => async dispatch => {
    console.log("getUserDataRequest")
    try {
        // do request
        const url = urls.BASE_API_URL + urls.GET_USER_DATA_PATH;
        const body = JSON.stringify({
            login: email,
            password: password,
        });

        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'get',
            body,
        });
        const result = await response.json();

        //check response on errors
        if (result === 500) {
            console.log("error 500")
        }
        dispatch(actions.login(result))
    } catch (e) {
        // display error message
        // dispatch(...)
    }
};