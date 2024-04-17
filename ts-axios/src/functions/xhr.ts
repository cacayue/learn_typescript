import { AxiosHttpRequestConfig } from "../types";

export default function xhr(config: AxiosHttpRequestConfig){
  const { data = null, url, method = 'get'} = config;

  let oReq = new XMLHttpRequest();
  // 打开异步请求
  oReq.open(method.toUpperCase(), url, true);
  oReq.send(data);
}