

import {
  ADD,
  MINUS
} from '../constants/counter'

export const add = () => {
  return {
    type: ADD
  }
}
export const minus = () => {
  return {
    type: MINUS
  }
}

export const asyncAdd = () => async (dispatch)=> {
  setTimeout(() => {
    dispatch(add())
  }, 2000)
};

