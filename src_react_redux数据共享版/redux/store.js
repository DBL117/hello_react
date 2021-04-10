import { createStore, applyMiddleware, combineReducers } from 'redux'
import countReducer from './reducers/count'
import personReducer from './reducers/person'
// 引入这个库 处理异步的action 不然action返回的是一个函数 会报错的
import thunk from 'redux-thunk'
const allReduce = combineReducers({
  count: countReducer,
  person: personReducer
})
export default createStore(allReduce, applyMiddleware(thunk))