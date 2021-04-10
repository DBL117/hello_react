import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import store from './redux/store'
import { Provider } from 'react-redux'
// 用Provider传递组件 就不用一遍遍的的App中给每一个需要状态的组件传递了
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root'))


// 用了react-redux后就不用监听这个事件了


// store.subscribe(() => {
//   ReactDOM.render(
//     <App />
//     ,
//     document.getElementById('root'))
// })