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
  params?: any
}