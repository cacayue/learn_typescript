import { AxiosHttpRequestConfig, AxiosPromise, AxiosResponse } from "../types";
import { contentLowcaseKey } from "../types/const";

export default function xhr(config: AxiosHttpRequestConfig): AxiosPromise {
  return new Promise((resolver) => {
    const { data = null, url, method = 'get', headers, responseType} = config;

      let oReq = new XMLHttpRequest();

      if (responseType) {
        oReq.responseType = responseType;
      }

      // 打开异步请求
      oReq.open(method.toUpperCase(), url, true);

      // readyState变更触发：https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readystatechange_event
      oReq.onreadystatechange = () => {
        // 状态为Done时继续执行
        if (oReq.readyState !== XMLHttpRequest.DONE) {
          return;
        }
        // 获取responseHeaders
        const responseHeaders = oReq.getAllResponseHeaders();
        // 获取返回数据（返回数据类型不为text返回响应内容，否则返回文本）
        const responseData = responseType && responseType !== 'text' ? oReq.response : oReq.responseText
        // 构建响应数据
        const response: AxiosResponse = {
          data: responseData,
          status: oReq.status,
          statusText: oReq.statusText,
          headers: responseHeaders,
          config,
          request: oReq
        };
        // 通过回调返回：https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
        resolver(response);
      }
      
      Object.keys(headers).forEach(name => {
        if (data == null && name.toLocaleLowerCase() == contentLowcaseKey) {
          delete headers[name]
        }else{
          oReq.setRequestHeader(name, headers[name]);
        }
      });

      oReq.send(data);
  });
}