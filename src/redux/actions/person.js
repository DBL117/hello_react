import { ADD_PERSON } from '../constant'

export function addPerson(data) {
  return {
    type: ADD_PERSON,
    data
  }
}