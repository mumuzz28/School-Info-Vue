import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "@vant/auto-import-resolver";
//配置别名
import { resolve } from "path";
const pathSrc = resolve(__dirname, "src");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [VantResolver()],
    }),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  server: {
    host: "0.0.0.0", // 监听所有 IP 地址
    port: 8080, // 可自定义端口
  },

  // ↓解析配置
  resolve: {
    alias: {
      //配置路径别名
      "@": pathSrc,
    },
  },
});
