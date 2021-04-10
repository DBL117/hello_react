import { ADD_PERSON } from '../constant'

const initState = [
  { id: '001', name: 'KOBE', age: '41' }
]
export default function perosonReducer(perState = initState, action){
  const { type, data } = action
  switch (type) {
    case ADD_PERSON:
      return [data, ...perState]
    default:
      return perState
  }
}