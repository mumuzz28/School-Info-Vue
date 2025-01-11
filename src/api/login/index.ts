import request from "@/config/axios";
import type { LoginParams, LoginResult } from "./index.d";

// 密码登录
export const login = (data: LoginParams): Promise<LoginResult> => {
  return request.post({
    url: "/login/byPassword",
    data,
  });
};

//获取验证码
export const getCode = (phoneNumber: string): Promise<string> => {
  return request.get({
    url: "/login/sendCode",
    params: {
      phoneNumber,
    },
  });
};


// 验证码登录
export const loginByCode = (data: LoginParams): Promise<LoginResult> => {
  return request.post({
    url: "/login/byPhone",
    data,
  });
};