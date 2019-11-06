import axios from './axios';

export default function fetchMiddleware({ dispatch, getState }) {
    return next => action => {
        const { promise , types, ...rest } = action;

        if (!promise) {
            console.log('no promise');
            _tmp = next(action)
            console.log(_tmp);
            return _tmp;
        }

        const [REQUEST, SUCCESS, FAILURE] = types;
        next({ ...rest, type: REQUEST });

        axios(promise
        ).then((response) => {
            console.log("RESPONSE");
            console.log(response.status);
            console.log(response.data);
            if (response.status === 200) {
                return next({...rest, payload: response.data, type: SUCCESS, status: response.status});
            }else{
                return next({...rest, payload: response.data, type: FAILURE, status: response.status});
            }
        }).catch((error) => {
            console.log("ERROR");
            console.log(error.message);
            return next({...rest, error: error.message, type: FAILURE, status: 520});
        });
    };
}