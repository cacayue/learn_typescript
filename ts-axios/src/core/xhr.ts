import { createError } from "../helpers/error";
import { parseHeaders } from "../helpers/headers";
import { AxiosHttpRequestConfig, AxiosPromise, AxiosResponse } from "../types";
import { contentLowcaseKey } from "../types/const";

export default function xhr(config: AxiosHttpRequestConfig): AxiosPromise {
  return new Promise((resolver, reject) => {
    const { timeout = 0, data = null, url, method = 'get', headers, responseType} = config;

      let oReq = new XMLHttpRequest();

      if (responseType) {
        oReq.responseType = responseType;
      }

      // 打开异步请求
      oReq.open(method.toUpperCase(), url!, true);


      oReq.onerror = () => {
        reject(createError(
          'Network Error',
          config,
          null,
          oReq
        ))
      }
      
      if (timeout && timeout !== 0) {
        oReq.timeout = timeout;
      }

      oReq.ontimeout = (error) => {
        reject(createError(
          `Timeout of ${error} ms exce`,
          config,
          'ECONNABORTED',
          oReq
        ))
      }

      // 响应处理
      // readyState变更触发：https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readystatechange_event
      oReq.onreadystatechange = () => {
        // 状态为Done时继续执行
        if (oReq.readyState !== XMLHttpRequest.DONE) {
          return;
        }

        if (oReq.status === 0) {
          return;
        }

        // 获取responseHeaders
        const responseHeaders = parseHeaders(oReq.getAllResponseHeaders());
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
        handleResponse(response);
      }

      function handleResponse(response: AxiosResponse){
        if (response.status >= 200 && response.status < 300) {
          resolver(response)
        }else{
          reject(createError(
            `Request failed with status code ${response.status}`,
            config,
            null,
            oReq,
            response
          ))
          reject(new Error());
        }
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
