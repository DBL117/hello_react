import { INCREMENT, DECREMENT } from '../constant'
export const createIncrementAction = data => ({ type: INCREMENT, data })
export const createDecrementAction = data => ({ type: DECREMENT, data })

export function createIncrementActionAsync(data, time = 500){
  return dispatch=>{
    setTimeout(() => {
      dispatch(createIncrementAction(data))
    }, time)
  }
}