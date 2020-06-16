export enum ArticleStatus {
  PUBLIC = 'public',
  DRAFT = 'draft',
}

export type TArticleMeta = {
  views: number
  likes: number
  comments: number
}
export interface IArticleInfo {
  title?: string
  keyword?: string
  status?: ArticleStatus
  publish?: boolean
  meta?: TArticleMeta
  thumb?: string
  userId?: number
  categoryId?: number
  content?: string
}
