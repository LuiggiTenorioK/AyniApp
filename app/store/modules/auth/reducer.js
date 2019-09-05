import {LOGIN_SUCCESS, LOGIN_FAIL, LOGIN, SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAIL, LOGOUT, VERIFYTOKEN,VERIFYTOKEN_SUCCESS,VERIFYTOKEN_FAIL} from './actions';

const initialState = {
    isFetching: false,
    isSignIn: false,
    token: '',
    idUser: -1,
    username: '',
    lastStatus: 200,
    lastError: ''
};

export default function reducer (state = initialState, action) {
    switch (action.type){
        case LOGIN:
            return {
                ...state,
                isFetching: true
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isFetching: false,
                isSignIn: true,
                token: action.payload.token,
                idUser: action.payload.id,
                username: action.payload.username,
                lastStatus: action.status,
                lastError: '',
            };
        case LOGIN_FAIL:
            if(action.status===520){
                return {
                    ...state,
                    isFetching: false,
                    isSignIn: false,
                    lastStatus: action.status,
                    lastError: JSON.stringify(action.error),
                };
            }else{
                return {
                    ...state,
                    isFetching: false,
                    isSignIn: false,
                    lastStatus: action.status,
                    lastError: JSON.stringify(action.payload),
                };
            };
        case SIGNUP:
            return {
                ...state,
                isFetching: true,
            };
        case SIGNUP_SUCCESS:
            return {
                ...state,
                isFetching: false,
                isSignIn: true,
                token: action.payload.token,
                idUser: action.payload.id,
                username: action.payload.username,
                lastStatus: action.status,
                lastError: '',
            };
        case SIGNUP_FAIL:
            if(action.status===520){
                return {
                    ...state,
                    isFetching: false,
                    isSignIn: false,
                    lastStatus: action.status,
                    lastError: JSON.stringify(action.error),
                };
            }else{
                return {
                    ...state,
                    isFetching: false,
                    isSignIn: false,
                    lastStatus: action.status,
                    lastError: JSON.stringify(action.payload),
                };
            };
        case LOGOUT:
            return {
                ...state,
                ...initialState
            };
        case VERIFYTOKEN:
            return {
                ...state,
                isFetching: true
            };
        case VERIFYTOKEN_SUCCESS:
            if (action.payload.valid){
                return{
                    ...state,
                    isFetching: false,
                }
            }else{
                return {
                    ...state,
                    ...initialState
                };
            }
        case VERIFYTOKEN_FAIL:
            return {
                ...state,
                ...initialState
            };
        default:
            return state;
    }
}