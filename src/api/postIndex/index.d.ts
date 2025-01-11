// export interface GetAllPostsResult {
//   id: number;
//   title: string;
//   content: string;
//   author: string;
//   postImg: string;
//   createdAt: string;
//   updatedAt: string;
//   status: number;
// }
export interface GetAllPostsResult {
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
//点赞的参数
export interface LikePostParams {
  userId: number
  postId: number
}

//收藏的参数
export interface FavorPostParams {
  userId: number
  postId: number
}
