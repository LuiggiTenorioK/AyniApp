import url from '../../url';

export const LOGIN = 'auth/LOGIN';
export const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
export const LOGIN_FAIL = 'auth/LOGIN_FAIL';

export function login(data) {
    return {
        types: [LOGIN, LOGIN_SUCCESS, LOGIN_FAIL],
        promise: {
            url: 'api/login',
            method: 'POST',
            data: data
        }
    }
}

export const SIGNUP = 'auth/SIGNUP';
export const SIGNUP_SUCCESS = 'auth/SIGNUP_SUCCESS';
export const SIGNUP_FAIL = 'auth/SIGNUP_FAIL';

export function signup(data) {
    return {
        types: [SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAIL],
        promise: {
            url: 'api/signup',
            method: 'POST',
            data: data,
        }
    }
}


export const LOGOUT = 'auth/LOGOUT';

export function logout() {
    return {
        type: LOGOUT
    }
}


export const VERIFYTOKEN = 'auth/VERIFYTOKEN';
export const VERIFYTOKEN_SUCCESS = 'auth/VERIFYTOKEN_SUCCESS';
export const VERIFYTOKEN_FAIL = 'auth/VERIFYTOKEN_FAIL';

export function verifyToken(data) {
    return {
        types: [VERIFYTOKEN, VERIFYTOKEN_SUCCESS, VERIFYTOKEN_FAIL],
        promise: {
            url: 'api/verifyToken',
            method: 'POST',
            data: data
        }
    }
}