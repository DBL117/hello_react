import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  // 为什么把App包在BrowserRouter里面？
  // 因为 不管是路由的导航（navigation）部分（NavLink标签）还是展示部分（Route标签）都需要包在BrowserRouter里 直接把App一包 一劳永逸
  <BrowserRouter>
    <App />
  </BrowserRouter>
  ,
  document.getElementById('root'))