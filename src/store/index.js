import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {userReducer} from './user'
import {homeReducer} from './home'

const rootReducer = combineReducers({
    user: userReducer,
    home: homeReducer,
})
export default createStore(rootReducer, applyMiddleware(thunk, logger));