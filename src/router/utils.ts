import router from "../router";
// import type { routerParams } from "./index.d";
// 路由跳转
export function moveTo(path: string) {
  router.push(path);
}
