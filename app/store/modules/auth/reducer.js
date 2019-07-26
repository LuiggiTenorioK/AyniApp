import {LOGIN_SUCCESS, LOGIN_FAIL, LOGIN, SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAIL} from './actions';

const initialState = {
    isFetching: false,
    isSignIn: false,
    token: '',
    idUser: -1,
    error: '',
    response: ''
};

export default function reducer (state = initialState, action) {
    switch (action.type){
        case LOGIN:
            return {
                ...state,
                isFetching: true,
                isSignIn: false,
                token: '',
                error: '',
                response: ''
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isFetching: false,
                isSignIn: true,
                token: action.payload.token,
                idUser: action.payload.id,
                error: '',
                response: JSON.stringify(action.payload)
            };
        case LOGIN_FAIL:
            return {
                ...state,
                isFetching: false,
                isSignIn: false,
                token: '',
                error: JSON.stringify(action.error),
                response: JSON.stringify(action.error)
            };
        case SIGNUP:
            return {
                ...state,
                isFetching: true,
                isSignIn: false,
                token: '',
                error: '',
                response: ''
            };
        case SIGNUP_SUCCESS:
            return {
                ...state,
                isFetching: false,
                isSignIn: true,
                token: action.payload.token,
                idUser: action.payload.id,
                error: '',
                response: JSON.stringify(action.payload)
            };
        case SIGNUP_FAIL:
            return {
                ...state,
                isFetching: false,
                isSignIn: false,
                token: '',
                error: JSON.stringify(action.error),
                response: JSON.stringify(action.error)
            };
        default:
            return state;
    }
}