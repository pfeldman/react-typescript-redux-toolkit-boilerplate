import { combineReducers } from 'redux'
import { reducer as counter } from './counter'
import { reducer as news } from './news'

const reducers = {
  counter,
  news,
}

export const appReducer = combineReducers(reducers)
