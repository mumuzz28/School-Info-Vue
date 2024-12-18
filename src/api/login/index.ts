import request from "@/config/axios";
import type { LoginParams, LoginResult } from "./index.d";

// 登录
export const login = (data: LoginParams): Promise<LoginResult> => {
  return request.post({
    url: "/login/byPassword",
    data,
  });
};


// 退出登录
export const logout = (): Promise<LoginResult> => {
  return request.post({
    url: "/logout",
  });
};