export const LOGIN = 'auth/LOGIN';
export const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
export const LOGIN_FAIL = 'auth/LOGIN_FAIL';

export function login(data) {
    return {
        types: [LOGIN, LOGIN_SUCCESS, LOGIN_FAIL],
        promise: {
            url: 'http://181.64.70.130:9994/api/login',
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json'
            }
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
            url: 'http://181.64.70.130:9994/api/signup',
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json'
            }
        }
    }
}