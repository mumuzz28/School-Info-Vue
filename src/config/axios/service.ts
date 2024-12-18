import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestHeaders,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { config } from "@/config/axios/config";
import { moveTo } from "@/router/utils";
const { result_code, base_url, request_timeout } = config;

const service: AxiosInstance = axios.create({
  baseURL: base_url, // api 的 base_url
  timeout: request_timeout, // 请求超时时间
  //   withCredentials: false, // 禁用 Cookie 等信息
});

// 白名单
const whiteList = ["/login"];
// request拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    let isWhite = false;
    isWhite = whiteList.some((item) => {
      if (config.url!.indexOf(item) > -1) {
        return true;
      }
    });


    if (localStorage.getItem("token") || isWhite) {
      config.headers.token = localStorage.getItem("token") as string;
    } else {
      // 如果没有token，跳到登录页面
      moveTo("/login");
      return Promise.reject(new Error("token is undefined"));
    }
    return config;
  },
  (error: AxiosError) => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
  }
);

// response拦截器
service.interceptors.response.use(
  async (response: AxiosResponse<any>) => {
    const { data, status } = response;
    if (status === 200) {
      const { code, message } = data;
      if (code === 200) {
        return Promise.resolve(data);
      } else {
        return Promise.reject(data);
      }
    } else {
      return Promise.reject(data);
    }
  },
  (error: AxiosError) => {
    // console.warn(error);
    return Promise.reject(error);
  }
);

export { service };
