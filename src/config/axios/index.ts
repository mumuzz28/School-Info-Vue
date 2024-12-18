import { service } from "./service";

import { config } from "./config";

const { default_headers } = config;
import type { requestConfig } from "./index.d";
// const request = (option: any) => {
const request = (option: requestConfig) => {
  const { url, method, params, data, headersType, responseType } = option;
  return service({
    ...option,
    url: url,
    method,
    params,
    data,
    responseType: responseType,
    headers: {
      "Content-Type": headersType || default_headers,
    },
  });
};

export default {
  get: async <T = any>(option: requestConfig) => {
    const res = await request({ method: "GET", ...option });
    return res.data as unknown as T;
  },
  post: async <T = any>(option: requestConfig) => {
    const res = await request({ method: "POST", ...option });
    return res.data as unknown as T;
  },

  delete: async <T = any>(option: requestConfig) => {
    const res = await request({ method: "DELETE", ...option });
    return res.data as unknown as T;
  },
  put: async <T = any>(option: requestConfig) => {
    const res = await request({ method: "PUT", ...option });
    return res.data as unknown as T;
  },
};
