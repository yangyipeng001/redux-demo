import { Component } from "react";
import {connect} from 'react-redux'
import { bindActionCreators } from "redux";

// HOC: higer order component，高阶组件：是个函数，接受组件作为参数，返回新的组件
export default connect(
    //其实就是映射
    // mapStateToProps
    // 1.
    // (state) => {
    //     return state
    // }

    // 2
    // (state, ownProps) => {
    //     console.log('ownProps', ownProps)
    //     return state
    // }

    // 3
    ({count}) => ({count}),


    // mapDispatchToProps function | object
    // 1
    // {
    //     add: () => ({type: 'ADD'}),
    //     minus: () => ({type: 'minus'}),
    // },

    // 2
    // (dispatch) => {
    //     return {dispatch}
    // }

    // 3
    (dispatch) => {
        let creators = {
            add: () => ({type: 'ADD'}),
            minus: () => ({type: 'minus'}),
        }

        creators = bindActionCreators(creators, dispatch)

        return {dispatch, ...creators}
    }
)(
    class ReactReduxPage extends Component {
        render() {
            console.log('props', this.props)
            const {count, dispatch, add, minus} = this.props

            return (
                <div>
                    <h3>ReactReduxPage</h3>
                    <button onClick={() => dispatch({type: 'ADD'})}>dispatch: {count}</button>

                    <button onClick={add}>add: {count}</button>
                </div>
            )
        }
    }
)