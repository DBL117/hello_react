import { createStore, applyMiddleware } from 'redux'
import countReducer from './count_reducer'
// 引入这个库 处理异步的action 不然action返回的是一个函数 会报错的
import thunk from 'redux-thunk'
export default createStore(countReducer, applyMiddleware(thunk))