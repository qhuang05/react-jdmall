import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { userReducer } from './user'
import { homeReducer } from './home'
import { categoryReducer } from './category';

const rootReducer = combineReducers({
    user: userReducer,
    home: homeReducer,
    category: categoryReducer
})
export default createStore(rootReducer, applyMiddleware(thunk));