import request from "@/config/axios";
import type {
  GetAllPostsResult,
  LikePostParams,
  FavorPostParams,
} from "./index.d";

// 获取所有帖子
export const getAllPosts = (): Promise<GetAllPostsResult[]> => {
  return request.get({
    url: "/posts/selectAllPostVo",
  });
};
// 根据帖子id查询帖子作者
export const getPostAuthor = (postId: number): Promise<GetPostAuthorResult> => {
  return request.get({
    url: `/posts/getPostAuthor/${postId}`,
  });
};
// 查询帖子点赞
export const getPostLikes = (postId: number): Promise<number> => {
  return request.get({
    url: `/posts/getPostLike/${postId}`,
  });
};

// 查询收藏帖子
export const getPostfavor = (postId: number): Promise<number> => {
  return request.get({
    url: `/posts/getPostfavor/${postId}`,
  });
};

//查询评论
export const getPostComment = (postId: number): Promise<number> => {
  return request.get({
    url: `/posts/getPostComment/${postId}`,
  });
};

// 点赞帖子
export const likePost = (data: LikePostParams): Promise<string> => {
  return request.post({
    url: `/posts/postLike/`,
    data,
  });
};

// 收藏帖子
export const favorPost = (data: favorPostParams): Promise<string> => {
  return request.post({
    url: `/posts/postFavor`,
    data,
  });
};
