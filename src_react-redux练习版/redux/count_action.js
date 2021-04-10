import { INCREMENT, DECREMENT } from './constant'

export const createIncrementAction = data => ({ type: INCREMENT, data })
export const createDecrementAction = data => ({ type: DECREMENT, data })

export const createIncrementActionAsync = (data, time = 600) => {
  // 异步的action返回的是一个函数 内部由redux调用
  return dispatch => {
    setTimeout(() => {
      dispatch(createIncrementAction(data))
    }, time)
  }
}