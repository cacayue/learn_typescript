import { AxiosHttpRequestConfig, AxiosResponse } from "../types";


export class AxiosError extends Error {
  config: AxiosHttpRequestConfig;
  code?: string | null;
  request?: any;
  response?: AxiosResponse;
  isAxiosError: boolean;

  constructor(
    message: string,
    config: AxiosHttpRequestConfig,
    code?: string | null,
    request?: any,
    response?: any
  ){
    super(message);

    this.config = config;
    this.code = code;
    this.request = request;
    this.response = response;
    this.isAxiosError = true;

    // 避免ts继承内置对象缺陷，https://github.com/Microsoft/TypeScript-wiki/blob/main/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
    Object.setPrototypeOf(this, AxiosError.prototype);
  }
}

export function createError(
  message: string,
  config: AxiosHttpRequestConfig,
  code?: string | null,
  request?: any,
  response?: any
): AxiosError
{
  const error = new AxiosError(message, config, code, request, response);
  return error;
}