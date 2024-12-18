import router from ".";

router.beforeEach((to, from, next) => {
  // console.log("beforeEach", to, from);
  next();
});
