import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Slice } from './types'

export const initialState: Slice = {
  value: 0,
}

const slice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    add(state, action: PayloadAction<number>) {
      state.value += action.payload
    },
    subtract(state, action: PayloadAction<number>) {
      state.value -= action.payload
    },
  },
})

export const { reducer } = slice

export const { add, subtract } = slice.actions
