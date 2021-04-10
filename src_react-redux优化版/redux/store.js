import { createStore, applyMiddleware } from 'redux'
import countReducer from './count_reducer.js'
// 引入thunk来支持异步的创建action（异步的action返回的不是一个普通对象 而是一个函数 store.dispatch无法认识函数 所以需要一个中间件thunk来解决这个问题）
import thunk from 'redux-thunk'

export default createStore(countReducer, applyMiddleware(thunk))