import { INCREMENT, DECREMENT } from './constant'
// action文件的作用就是 根据组件传来的data 生成action对象

// 传回一个对象的是同步的action
export const createIncrementAction = data => ({ type: INCREMENT, data })
export const createDecrementAction = data => ({ type: DECREMENT, data })

// 传回一个函数的异步的action
export const createIncrementActionAsync = (data, time) => {
  return dispatch => {
    // 这个传回的函数 结果是store帮调用 所以可以给一个参数
    setTimeout(() => {
      dispatch(createIncrementAction(data))
    }, time)
  }
}