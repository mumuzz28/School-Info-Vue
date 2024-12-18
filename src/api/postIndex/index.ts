import request from "@/config/axios";
import type { GetAllPostsResult } from "./index.d";

// 获取所有帖子
export const getAllPosts = (): Promise<GetAllPostsResult[]> => {
  return request.get({
    url: "/posts/getAllPosts",
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
