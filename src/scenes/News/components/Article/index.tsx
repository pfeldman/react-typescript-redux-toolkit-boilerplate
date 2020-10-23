import React from 'react'
import { Article as ArticleInterface } from 'store/news/types'
import { Title } from './styled'

interface Props {
  article: ArticleInterface
}

export const Article: React.FC<Props> = ({ article }) => {
  return (
    <div>
      <Title>{article.title}</Title>
      <div className="imageContainer">
        <img src={article.urlToImage} alt={article.title} />
      </div>
      <p>{article.description}</p>
    </div>
  )
}
