import { createStore, applyMiddleware } from 'redux'
import allReduce from './reducers/index'
// 引入这个库 处理异步的action 不然action返回的是一个函数 会报错的
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
export default createStore(allReduce, composeWithDevTools(applyMiddleware(thunk)))