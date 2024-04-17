export type Method = 'get' | 'GET'
| 'post' | 'POST'
| 'put' | 'PUT'
| 'delete' | 'DELETE'
| 'head' | 'HEAD'
| 'options' | 'OPTIONS'
| 'patch' | 'PATCH'

export interface AxiosHttpRequestConfig {
  url: string
  method: Method
  headers?: any
  data?: any
  params?: any,
  responseType?: XMLHttpRequestResponseType
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