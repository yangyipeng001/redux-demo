import React, { useContext, useEffect, useReducer, useLayoutEffect,useState, useCallback } from 'react'
import { bindActionCreators } from '../redux-nut'

// Context传值 跨组件层级传递数据
// ! 1.创建context对象
const Context = React.createContext()

// ! 2. Provider组件传递value（store）
export function Provider({store, children}) {
    return <Context.Provider value={store}>{children}</Context.Provider>
}

// ! 3. 后代消费Provider传递下来的value
// * contextType 只能用在类组件，只能订阅单一的context来源
// * useContext 只能用在函数组件或者 自定义Hook中
// * Consumer 没有组件限制，注意使用方式

export const connect = (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => (props) => {
    const store = useContext(Context)
    const {getState, dispatch, subscribe} = store

    const stateProps = mapStateToProps(getState())
    let dispatchProps = {dispatch}
    if (typeof mapDispatchToProps === 'function') {
        dispatchProps = mapDispatchToProps(dispatch)
    }
    else if (typeof mapDispatchToProps === 'object') {
        dispatchProps = bindActionCreators(mapDispatchToProps, dispatch)
    }

    // 订阅
    // const [, forceUpdate] = useReducer((x) => x + 1, 0)
    const forceUpdate = useForceUpdate()
    // DOM 因为useEffect有延迟
    useLayoutEffect(() => {
        const unsubscribe = subscribe(() => {
            forceUpdate()
        })

        return () => {
            unsubscribe()
        }
    }, [subscribe])

    return <WrappedComponent {...props} {...stateProps} {...dispatchProps} />
}

function useForceUpdate() {
    // const [, forceUpdate] = useReducer((x) => x + 1, 0)

    const [state, setState] = useState(0)

    const update = useCallback(() => {
        setState((prev) => prev + 1)
    }, [])

    return update
}
