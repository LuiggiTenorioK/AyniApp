import {GET_USER, GET_USER_SUCCESS, GET_USER_FAIL} from './actions';

const initialState = {
    isFetching: false,
    users: [],
    selectedUser: {
        name: '',
        username: '',
        email: ''
    }
}

export default function reducer (state = initialState, action) {
    switch (action.type){
        case GET_USER:
            return {
                ...state,
                isFetching: true,
                selectedUser:{
                    name: '',
                    username: '',
                    email: ''
                }
            };
        case GET_USER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                selectedUser:{
                    name: action.payload.name,
                    username: action.payload.username,
                    email: action.payload.email
                }
            };
        case GET_USER_FAIL:
            return {
                ...state,
                isFetching: false,
                selectedUser:{
                    name: 'user-error',
                    username: 'user-error',
                    email: 'user-error'
                }
            };
        default:
            return state;
    }
}