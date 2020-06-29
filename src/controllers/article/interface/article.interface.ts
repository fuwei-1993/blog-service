export enum ArticleStatus {
  PUBLIC = 'public',
  DRAFT = 'draft',
}

export interface IArticleMeta {
  views: number
  likes: number
  comments: number
}
export interface IArticle {
  title: string
  keyword: string
  status: ArticleStatus
  publish: boolean
  meta: IArticleMeta
  thumb: string
  content: string
}
