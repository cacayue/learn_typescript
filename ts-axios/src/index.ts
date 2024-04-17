import xhr from "./functions/xhr";
import { transformRequest } from "./helpers/data";
import { processHeaders } from "./helpers/headers";
import { buildURL } from "./helpers/url";
import { AxiosHttpRequestConfig } from "./types";

function axios(config: AxiosHttpRequestConfig): void{
  processConfig(config);
  xhr(config);
}

function processConfig(config: AxiosHttpRequestConfig):void{
  config.url = transformUrl(config);
  config.headers = transformHeaders(config);
  config.data = transformRequest(config.data);
}

function transformUrl(config: AxiosHttpRequestConfig): string{
  const { url, params} = config;
  return buildURL(url, params);
}

function transformHeaders(config: AxiosHttpRequestConfig):any{
  const { headers = {}, data} = config;
  return processHeaders(headers, data);
}

export default axios;