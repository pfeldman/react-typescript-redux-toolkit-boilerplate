import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { Thunk } from 'store/types'
import { API_KEY, BASE_URL } from 'resources/constants'
import { Article, Slice } from './types'

export const initialState: Slice = {
  articles: [],
  isFetching: false,
  isError: false,
}

const slice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    request(state) {
      state.isFetching = true
    },
    success(state, action: PayloadAction<Article[]>) {
      state.isFetching = false
      state.isError = false
      state.articles = action.payload
    },
    failure(state) {
      state.isFetching = false
      state.isError = true
    },
  },
})

export const { reducer } = slice

export const { request, success, failure } = slice.actions

export const getNews = (search: string): Thunk => {
  return async (dispatch) => {
    dispatch(request())
    try {
      const { data } = await axios.get(
        `${BASE_URL}/everything?q=${search}&from=2020-09-23&sortBy=publishedAt&apiKey=${API_KEY}`
      )
      dispatch(success(data.articles))
    } catch (e) {
      dispatch(failure())
    }
  }
}
