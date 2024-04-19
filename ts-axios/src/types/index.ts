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

export interface AxiosResponse<T=any> {
  data: T,
  status: number,
  statusText: string,
  headers: any,
  config: AxiosHttpRequestConfig,
  request: any
}

export interface AxiosPromise<T=any> extends Promise<AxiosResponse<T>>{
  
}

export interface AxiosError extends Error{
  config: AxiosHttpRequestConfig,
  code?: string,
  request?: any,
  response?: AxiosResponse,
  isAxiosError: boolean
}

export interface Axios {
  request<T=any>(config: AxiosHttpRequestConfig): AxiosPromise<T>;
  get<T=any>(url:string, config?: AxiosHttpRequestConfig): AxiosPromise<T>;
  delete<T=any>(url:string, config?: AxiosHttpRequestConfig): AxiosPromise<T>;
  head<T=any>(url:string, config?: AxiosHttpRequestConfig): AxiosPromise<T>;
  options<T=any>(url:string, config?: AxiosHttpRequestConfig): AxiosPromise<T>;
  post<T=any>(url:string,data?: any, config?: AxiosHttpRequestConfig): AxiosPromise<T>;
  put<T=any>(url:string,data?: any, config?: AxiosHttpRequestConfig): AxiosPromise<T>;
  patch<T=any>(url:string,data?: any, config?: AxiosHttpRequestConfig): AxiosPromise<T>;
}

export interface AxiosInstance extends Axios{
  <T=any>(config: AxiosHttpRequestConfig): AxiosPromise<T>
  <T=any>(url:string, config?: AxiosHttpRequestConfig): AxiosPromise<T>
}

export interface IAxiosInterceptorsManager<T> {
  use(resolved: ResolvedFn<T>, reject?:RejectFn): number;

  eject(id: number): void;
}

export interface ResolvedFn<T> {
  (val: T): T | Promise<T>
}

export interface RejectFn {
  (error: any): any
}