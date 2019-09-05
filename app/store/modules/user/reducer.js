import {GET_USER, GET_USER_SUCCESS, GET_USER_FAIL} from './actions';

const initialState = {
    isFetching: false,
    users: [],
    selectedUser: null
}

export default function reducer (state = initialState, action) {
    switch (action.type){
        case GET_USER:
            return {
                ...state,
                isFetching: true,
                selectedUser:null
            };
        case GET_USER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                selectedUser: action.payload
            };
        case GET_USER_FAIL:
            return {
                ...state,
                isFetching: false,
                selectedUser:null
            };
        default:
            return state;
    }
}