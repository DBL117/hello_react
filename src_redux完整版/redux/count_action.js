import { INCREMENT, DECREMENT } from './constant'
// action文件的作用就是 根据组件传来的data 生成action对象

export const createIncrementAction = data => ( { type: INCREMENT, data } )
export const createDecrementAction = data => ( { type: DECREMENT, data } )