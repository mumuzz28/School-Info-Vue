import router from ".";
import { useUserStore } from "@/store/userstore";

router.beforeEach((to, from, next) => {
  // // 检查目标路由是否需要身份验证
  // if (to.matched.some((record) => record.meta.requiresAuth)) {
  //   // 获取用户 token
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     // 如果有 token，继续导航
  //     next();
  //   } else {
  //     // 如果没有 token，重定向到登录页面
  //     next({
  //       path: "/login",
  //       query: { redirect: to.fullPath }, // 保存用户想要访问的页面，以便登录后重定向
  //     });
  //   }
  // } else {
  //   // 如果不需要身份验证，继续导航
  //   next();
  // }
});
