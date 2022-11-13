export default function({getState, dispatch}) {
    return (next) => (action) => {
        console.log('---------------------------')
        console.log(action.type, '执行了')

        const prevState = getState()
        console.log('pre state', prevState)

        const returnValue = next(action)

        // 等状态值修改之后，再执行getState, 拿到了新的状态值
        const nextState = getState()
        console.log('next state', nextState)

        console.log('---------------------------')

        return returnValue
    }
}