// import {createStore, applyMiddleware, combineReducers} from 'redux';
// import thunk from 'redux-thunk';
// import logger from 'redux-logger'
// import promise from 'redux-promise'

import {
    createStore, 
    applyMiddleware, 
    logger, 
    thunk, 
    promise,
    combineReducers,
} from '../redux-nut';


export function countReducer(state = 0, action) {
    switch (action.type) {
        case 'ADD': 
            return state + 1

        case 'MINUS':
            return state - 1

        default:
            return state
    }
}

// 创建store {count: 0, use: 'name}
const store = createStore(
    // countReducer,
    combineReducers({
        count: countReducer,
        // user: userReducer,
    }),
    applyMiddleware(
        promise,
        thunk,
        // logger
    )
)

export default store