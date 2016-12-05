import {createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise-middleware'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import reducer from './reducers'
import {routerReducer} from 'react-router-redux'
import {combineReducers} from 'redux'

const reducers = combineReducers({
    users: reducer,
    routing: routerReducer
});

const middleware = applyMiddleware(promise(),thunk,logger());

export default createStore(reducers,middleware)

