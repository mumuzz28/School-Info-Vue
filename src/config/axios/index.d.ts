
export interface requestConfig {
  url: string;
  method?:
    | "GET"
    | "POST"
    | "PUT"
    | "DELETE"
    | "OPTIONS"
    | "HEAD"
    | "PATCH";
  params?: T;
  data?: T;
  headersType?: AxiosHeaders;
  responseType?: T;
}
