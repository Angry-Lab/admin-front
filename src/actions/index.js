export const LOGIN = 'LOGIN';
export const login = result => ({
    type: LOGIN,
    payload: result,
});

export const getIsLogged = state => {
    const token = localStorage.getItem('token');
    return token != null
};
