interface Source {
  id: string | null
  name: string
}

export interface Article {
  author: string
  content: string
  description: string
  publishedAt: string
  source: Source
  title: string
  url: string
  urlToImage: string
}

export interface Slice {
  articles: Article[]
  isFetching: boolean
  isError: boolean
  dataFetchedAt?: number
}
