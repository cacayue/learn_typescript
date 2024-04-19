import { AxiosHttpRequestConfig, AxiosInstance, AxiosPromise, Method } from "../types";
import dispatchRequest from "./dispatchRequest";

export default class Axios{

  request(config: AxiosHttpRequestConfig): AxiosPromise {
    return dispatchRequest(config);
  }

  get(url: string, config?: AxiosHttpRequestConfig | undefined): AxiosPromise {
    return this._dispatchRequestWithOutData('get',url, config);
  }

  delete(url: string, config?: AxiosHttpRequestConfig | undefined): AxiosPromise {
    return this._dispatchRequestWithOutData('delete',url, config);
  }
  
  head(url: string, config?: AxiosHttpRequestConfig | undefined): AxiosPromise {
    return this._dispatchRequestWithOutData('head',url, config);
  }

  options(url: string, config?: AxiosHttpRequestConfig | undefined): AxiosPromise {
    return this._dispatchRequestWithOutData('options',url, config);
  }

  post(url: string, data?: any, config?: AxiosHttpRequestConfig | undefined): AxiosPromise {
    return this._dispatchRequestWithData('post',url, config,data);
  }

  put(url: string, data?: any, config?: AxiosHttpRequestConfig | undefined): AxiosPromise {
    return this._dispatchRequestWithData('put',url, config,data);
  }

  patch(url: string, data?: any, config?: AxiosHttpRequestConfig | undefined): AxiosPromise {
    return this._dispatchRequestWithData('patch',url, config,data);
  }

  private _dispatchRequestWithOutData(
    method: Method,
    url: string, 
    config?: AxiosHttpRequestConfig
  ):AxiosPromise {
    return this.request(
      Object.assign(config || {}, {
        url,
        method
    }));
  }

  private _dispatchRequestWithData(
    method: Method,
    url?: string, 
    config?: AxiosHttpRequestConfig,
    data?: any
  ): AxiosPromise {
    return this.request(Object.assign(config || {}, {
      method: method,
      url,
      data
    }));
  }
  
}