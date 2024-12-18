import type { GetAllPostsResult } from "@/api/postIndex/index.d";

export interface dataList extends GetAllPostsResult {
  likeCount: number;
  commentCount: number;
  favorCount: number;
}
// ../../types/postcard.ts
export interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  postImg: string;
  createdAt: string;
  updatedAt: string;
  status: number;
  likeCount: number;
  commentCount: number;
  favorCount: number;
}

export type dataList = Post[];