// vite.config.ts
import { defineConfig } from "file:///D:/VueDEV/MyDev/School-Info-Vue-main/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/VueDEV/MyDev/School-Info-Vue-main/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import AutoImport from "file:///D:/VueDEV/MyDev/School-Info-Vue-main/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///D:/VueDEV/MyDev/School-Info-Vue-main/node_modules/unplugin-vue-components/dist/vite.js";
import { VantResolver } from "file:///D:/VueDEV/MyDev/School-Info-Vue-main/node_modules/@vant/auto-import-resolver/dist/index.esm.mjs";
import { resolve } from "path";
var __vite_injected_original_dirname = "D:\\VueDEV\\MyDev\\School-Info-Vue-main";
var pathSrc = resolve(__vite_injected_original_dirname, "src");
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [VantResolver()]
    }),
    Components({
      resolvers: [VantResolver()]
    })
  ],
  server: {
    host: "0.0.0.0",
    // 监听所有 IP 地址
    port: 8080
    // 可自定义端口
  },
  // ↓解析配置
  resolve: {
    alias: {
      //配置路径别名
      "@": pathSrc
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxWdWVERVZcXFxcTXlEZXZcXFxcU2Nob29sLUluZm8tVnVlLW1haW5cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFZ1ZURFVlxcXFxNeURldlxcXFxTY2hvb2wtSW5mby1WdWUtbWFpblxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovVnVlREVWL015RGV2L1NjaG9vbC1JbmZvLVZ1ZS1tYWluL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHZ1ZSBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlXCI7XHJcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gXCJ1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlXCI7XHJcbmltcG9ydCBDb21wb25lbnRzIGZyb20gXCJ1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlXCI7XHJcbmltcG9ydCB7IFZhbnRSZXNvbHZlciB9IGZyb20gXCJAdmFudC9hdXRvLWltcG9ydC1yZXNvbHZlclwiO1xyXG4vL1x1OTE0RFx1N0Y2RVx1NTIyQlx1NTQwRFxyXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSBcInBhdGhcIjtcclxuY29uc3QgcGF0aFNyYyA9IHJlc29sdmUoX19kaXJuYW1lLCBcInNyY1wiKTtcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW1xyXG4gICAgdnVlKCksXHJcbiAgICBBdXRvSW1wb3J0KHtcclxuICAgICAgcmVzb2x2ZXJzOiBbVmFudFJlc29sdmVyKCldLFxyXG4gICAgfSksXHJcbiAgICBDb21wb25lbnRzKHtcclxuICAgICAgcmVzb2x2ZXJzOiBbVmFudFJlc29sdmVyKCldLFxyXG4gICAgfSksXHJcbiAgXSxcclxuICBzZXJ2ZXI6IHtcclxuICAgIGhvc3Q6IFwiMC4wLjAuMFwiLCAvLyBcdTc2RDFcdTU0MkNcdTYyNDBcdTY3MDkgSVAgXHU1NzMwXHU1NzQwXHJcbiAgICBwb3J0OiA4MDgwLCAvLyBcdTUzRUZcdTgxRUFcdTVCOUFcdTRFNDlcdTdBRUZcdTUzRTNcclxuICB9LFxyXG5cclxuICAvLyBcdTIxOTNcdTg5RTNcdTY3OTBcdTkxNERcdTdGNkVcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICAvL1x1OTE0RFx1N0Y2RVx1OERFRlx1NUY4NFx1NTIyQlx1NTQwRFxyXG4gICAgICBcIkBcIjogcGF0aFNyYyxcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBc1MsU0FBUyxvQkFBb0I7QUFDblUsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBQ3ZCLFNBQVMsb0JBQW9CO0FBRTdCLFNBQVMsZUFBZTtBQU54QixJQUFNLG1DQUFtQztBQU96QyxJQUFNLFVBQVUsUUFBUSxrQ0FBVyxLQUFLO0FBR3hDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLFdBQVc7QUFBQSxNQUNULFdBQVcsQ0FBQyxhQUFhLENBQUM7QUFBQSxJQUM1QixDQUFDO0FBQUEsSUFDRCxXQUFXO0FBQUEsTUFDVCxXQUFXLENBQUMsYUFBYSxDQUFDO0FBQUEsSUFDNUIsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQTtBQUFBLElBQ04sTUFBTTtBQUFBO0FBQUEsRUFDUjtBQUFBO0FBQUEsRUFHQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUE7QUFBQSxNQUVMLEtBQUs7QUFBQSxJQUNQO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
