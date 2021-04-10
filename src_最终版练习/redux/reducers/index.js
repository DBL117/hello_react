import { combineReducers } from 'redux'
import person from './person'
import count from './count'
export default combineReducers({
  count,
  person
})