export const getIsLogged = state => {
    const token = localStorage.getItem('token');
    return token != null
};