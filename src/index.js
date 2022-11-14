import { createRoot } from "react-dom/client";
import App from "./App";
// import { Provider } from "react-redux";
import { Provider } from "./react-redux-nut";

import store from "./store";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
  // <App />
);


// compose
// 上一个函数的返回值是下一个函数的参数
// function compose(...funcs) {
//   if (funcs.length === 0) {
//     return (arg) => arg
//   }

//   if (funcs.length === 1) {
//     return funcs[0]
//   }

//   return funcs.reduce((a, b) => {
//     return (...args) => {
//       return a(b(...args))
//     }
//   })
// }

// // 测试
// function f1(arg) {
//   console.log('f1', arg)
//   return arg
// }
// function f2(arg) {
//   console.log('f2', arg)
//   return arg
// }
// function f3(arg) {
//   console.log('f3', arg)
//   return arg
// }
// const res = compose(f1, f2, f3)('omg')
// console.log(res)
