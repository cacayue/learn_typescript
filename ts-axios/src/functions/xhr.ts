import { AxiosHttpRequestConfig } from "../types";
import { contentLowcaseKey } from "../types/const";

export default function xhr(config: AxiosHttpRequestConfig){
  const { data = null, url, method = 'get', headers} = config;

  let oReq = new XMLHttpRequest();
  // 打开异步请求
  oReq.open(method.toUpperCase(), url, true);

  Object.keys(headers).forEach(name => {
    if (data == null && name.toLocaleLowerCase() == contentLowcaseKey) {
      delete headers[name]
    }else{
      oReq.setRequestHeader(name, headers[name]);
    }
  });

  oReq.send(data);
}