export enum ArticleStatus {
  PUBLIC = 'public',
  DRAFT = 'draft',
}

export interface IArticleInfo {
  title: string
  keyword: string
  status: ArticleStatus
  publish: boolean
  meta: {
    views: number
    likes: number
    comments: number
  }
  thumb?: string
  // userId?: User
  // categoryId?: Category
}
