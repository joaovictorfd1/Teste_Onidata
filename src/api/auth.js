export const TOKEN_KEY = "@user-token";
export const USER_TYPE = "@user-type";
export const USER_NAME = "@user-name";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY);
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = token => {
    localStorage.setItem(TOKEN_KEY, token);
}
export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_TYPE);
    localStorage.removeItem(USER_NAME);
    localStorage.clear();
}
export const userType = (type) => { localStorage.setItem(USER_TYPE, type) };
export const getUserType = () => {
    return localStorage.getItem(USER_TYPE);
}
export const userName = (name) => { localStorage.setItem(USER_NAME, name) };

