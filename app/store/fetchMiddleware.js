export default function fetchMiddleware({ dispatch, getState }) {
    return next => action => {
        const { promise , types, ...rest } = action;

        if (!promise) {
            return next(action);
        }

        const [REQUEST, SUCCESS, FAILURE] = types;
        next({ ...rest, type: REQUEST });

        const actionPromise = fetch(promise.url, promise);

        actionPromise
            .then(response => {
                if (response.status === 200){
                    response.json().then( payload => next({...rest, payload, type: SUCCESS}) );
                } else{
                    response.json().then( error => next({...rest, error, type: FAILURE}) );
                }    
            })
            .catch(error => next({...rest, error, type: FAILURE}));

        // El viejo Jenkins
        /*actionPromise
            .then(response => response.json())
            .then(payload => next( {...rest, payload, type: SUCCESS}))
            .catch(error => next({...rest, error, type: FAILURE}));*/

        return actionPromise;
    };
}