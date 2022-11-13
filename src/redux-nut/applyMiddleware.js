import {compose} from '../redux-nut'

export default function applyMiddleware(...middlewares) {
    return (createStore) => (reducer) => {
        const store = createStore(reducer)
        let dispatch = store.dispatch

        // @TODO: 加强dispatch
        const midAPI = {
            getState: store.getState,
            // 当前上下文的dispatch, 不是原版的dispatch
            dispatch: (action, ...args) => dispatch(action, ...args),
        }

        const middlewareChain = middlewares.map((middleware) => middleware(midAPI))

        // 加强版的dispatch
        // 把所有的中间件的函数都执行了，同时还执行store.dispatch
        dispatch = compose(...middlewareChain)(store.dispatch)

        return {
            ...store,

            // 加强版的dispatch
            dispatch
        }
    }
}