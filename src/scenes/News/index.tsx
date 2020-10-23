import React from 'react'
import { Input } from 'components'
import { useDispatch, useSelector } from 'react-redux'
import { getNews } from 'store/news'
import { getArticles, getIsError, getIsFetching } from 'store/news/selectors'
import { Article } from './components/Article'
import { Wrapper } from './styled'

export const News: React.FC = () => {
  const dispatch = useDispatch()
  const isFetching = useSelector(getIsFetching)
  const isError = useSelector(getIsError)
  const articles = useSelector(getArticles)

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.charCode === 13) {
      dispatch(getNews(e.currentTarget.value))
    }
  }

  return (
    <>
      <Input placeholder="Search news Criteria" onKeyPress={handleKeyPress} />
      {isFetching && 'LOADING DATA...'}
      {isError && 'ERROR LOADING DATA...'}
      <Wrapper>
        {articles.map((article) => (
          <Article key={article.url} article={article} />
        ))}
      </Wrapper>
    </>
  )
}
