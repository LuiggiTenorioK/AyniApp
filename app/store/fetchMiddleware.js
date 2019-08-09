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
                let _status = response.status;
                if(response.ok){
                    response.json()
                        .then( payload => next({...rest, payload, type: SUCCESS, status: _status}) );
                } else {
                    response.json()
                        .then( payload => next({...rest, payload, type: FAILURE, status: _status}) );
                }
            })
            .catch( error => next({...rest, error, type: FAILURE, status: 520}) );
            // Unknown error status 520 
            // is a "catch-all response for when the origin server returns something unexpected" by Cloudfare (Wikipedia)

        
        // El viejo Jenkins
        /*actionPromise
            .then(response => response.json())
            .then(payload => next( {...rest, payload, type: SUCCESS}))
            .catch(error => next({...rest, error, type: FAILURE}));*/

        return actionPromise;
    };
}