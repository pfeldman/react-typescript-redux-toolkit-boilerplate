import { RootState } from 'store/types'

export const getValue = (state: RootState) => state.counter.value
