import url from '../../url';

export const GET_USER = 'user/GET_USER';
export const GET_USER_SUCCESS = 'user/GET_USER_SUCCESS';
export const GET_USER_FAIL = 'user/GET_USER_FAIL';

import {Buffer} from 'buffer';

export function getUser(id, token) {
    let headers = new Headers();
    headers.set('Authorization', 'Basic ' +  Buffer.from(token + ":" + "unused").toString('base64'));
    
    return {
        types: [GET_USER, GET_USER_SUCCESS, GET_USER_FAIL],
        promise: {
            url: url+'api/users/'+id.toString(),
            method: 'GET',
            headers: headers
        }
    }
}