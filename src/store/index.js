// import {createStore, applyMiddleware} from 'redux';
// import thunk from 'redux-thunk';
// import logger from 'redux-logger'
// import promise from 'redux-promise'

import {createStore, applyMiddleware, logger, thunk, promise} from '../redux-nut';


function countReducer(state = 0, action) {
    switch (action.type) {
        case 'ADD': 
            return state + 1

        case 'MINUS':
            return state - 1

        default:
            return state
    }
}

const store = createStore(
    countReducer,
    applyMiddleware(promise, thunk, logger)
)

export default store