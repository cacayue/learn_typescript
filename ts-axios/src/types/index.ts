export type Method = 'get' | 'GET'
| 'post' | 'POST'
| 'put' | 'PUT'
| 'delete' | 'DELETE'
| 'head' | 'HEAD'
| 'options' | 'OPTIONS'
| 'patch' | 'PATCH'

export interface AxiosHttpRequestConfig {
  url?: string
  method: Method
  headers?: any
  data?: any
  params?: any,
  responseType?: XMLHttpRequestResponseType,
  timeout?: number
}

export interface AxiosResponse {
  data: any,
  status: number,
  statusText: string,
  headers: any,
  config: AxiosHttpRequestConfig,
  request: any
}

export interface AxiosPromise extends Promise<AxiosResponse>{
  
}

export interface AxiosError extends Error{
  config: AxiosHttpRequestConfig,
  code?: string,
  request?: any,
  response?: AxiosResponse,
  isAxiosError: boolean
}

export interface Axios {
  request(config: AxiosHttpRequestConfig): AxiosPromise;
  get(url:string, config?: AxiosHttpRequestConfig): AxiosPromise;
  delete(url:string, config?: AxiosHttpRequestConfig): AxiosPromise;
  head(url:string, config?: AxiosHttpRequestConfig): AxiosPromise;
  options(url:string, config?: AxiosHttpRequestConfig): AxiosPromise;
  post(url:string,data?: any, config?: AxiosHttpRequestConfig): AxiosPromise;
  put(url:string,data?: any, config?: AxiosHttpRequestConfig): AxiosPromise;
  patch(url:string,data?: any, config?: AxiosHttpRequestConfig): AxiosPromise;
}

export interface AxiosInstance extends Axios{
  (config: AxiosHttpRequestConfig): AxiosPromise
  (url:string, config: AxiosHttpRequestConfig): AxiosPromise
}