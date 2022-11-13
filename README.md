# redux-demo

## 资料
- [redux](https://cn.redux.js.org/)
- [redux-github](https://github.com/reduxjs/redux)

## 项目
```bash
# node >= 18

yarn create react-app form-demo
cd form-demo

# 用craco来方便的修改配置
yarn add antd @craco/craco craco-less
yarn add react-redux redux redux-logger redux-promise redux-thunk

# 启动
yarn start
```

### 修改package
```js
"script": {
    // "start": "react-scripts start",
    // "build": "react-scripts build",
    // "test": "react-scripts test",
    "start": "craco start",
    "build": "craco build",
    "test": "craco test",
}
```

### 在根目录下加一个文件，craco.config.js
```js
// * 配置完成后记得重启下
const CracoLessPlugin = require("craco-less");

module.exports = {
    babel: {
        //用来支持装饰器
        plugins: [["@babel/plugin-proposal-decorators", {legacy: true}]]
    },
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                lessOptions: {
                    modifyVars: {
                    "@primary-color": "red",
                    "@border-color-base": "green",
                    "@link-color": "orange"
                    },
                    javascriptEnabled: true
                }
                }
            }
        }
    ]
};
```