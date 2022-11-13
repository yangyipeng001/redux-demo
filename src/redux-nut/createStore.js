export default function createStore(reducer, enhancer) {
    if (enhancer) {
        return enhancer(createStore)(reducer)
    }

    let currentState;
    let currentListeners = []

    function getState() {
        return currentState
    }

    function dispatch(action) {
        currentState = reducer(currentState, action)

        currentListeners.forEach((listener) => listener())
    }

    function subscribe(listener) {
        currentListeners.push(listener)

        return () => {
            const index = currentListeners.indexOf(listener)
            currentListeners.splice(index, 1)
        }
    }

    // 手动执行一次，保证跟用户不一致
    dispatch({type: 'ASASASASASAS/Redux'})

    return {
        getState,
        dispatch,
        subscribe
    }
}