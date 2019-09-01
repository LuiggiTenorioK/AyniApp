import { createStore, combineReducers, applyMiddleware } from 'redux';
import fetchMiddleware from './fetchMiddleware';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import auth from './modules/auth/reducer';
import user from './modules/user/reducer';

const reducers = combineReducers({
    auth,
    user
});

// Persistance
const persistConfig = {
    key: 'root',
    storage,
};
  
const persistedReducer = persistReducer(persistConfig, reducers)

export default store = createStore(persistedReducer, applyMiddleware(fetchMiddleware));