import { createStore, combineReducers, applyMiddleware } from 'redux';
import fetchMiddleware from './fetchMiddleware';

import auth from './modules/auth/reducer';

const reducers = combineReducers({
    auth,
});

export default store = createStore(reducers, applyMiddleware(fetchMiddleware));