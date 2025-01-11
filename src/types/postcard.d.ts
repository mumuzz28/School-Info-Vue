import type { GetAllPostsResult } from '@/api/postIndex/index.d'

export interface dataList {
  postId: number
  userId: number
  category: string
  username: string
  city: string | null
  avatarUrl: string | null
  title: string
  content: string
  postImg: string
  status: number
  favorCount: number
  commentCount: number
  likeCount: number
  createdAt: string
}
export interface FavorPostParams {
  userId: number
  postId: number
}
export interface LikePostParams {
  userId: number
  postId: number
}
