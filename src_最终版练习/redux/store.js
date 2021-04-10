import { createStore, applyMiddleware } from 'redux'
import allReducer from './reducers/index'
import thunk from 'redux-thunk'
// 引入使用redux-devtools的第三方库
import { composeWithDevTools } from 'redux-devtools-extension'
export default createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)))