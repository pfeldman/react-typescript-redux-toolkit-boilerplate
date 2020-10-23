import { RootState } from 'store/types'

export const getIsFetching = (state: RootState) => state.news.isFetching
export const getIsError = (state: RootState) => state.news.isError
export const getArticles = (state: RootState) => state.news.articles
