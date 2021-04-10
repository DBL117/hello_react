import { DECREMENT, INCREMENT } from '../constant'
const initState = 0

export default function countReducer(preState = initState, action){
  const { type, data } = action
  switch (type) {
    case INCREMENT:
      return data + preState
    case DECREMENT:
      return preState - data
    default:
      return preState
  }
}