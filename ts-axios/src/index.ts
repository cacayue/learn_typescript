import xhr from "./functions/xhr";
import { transformRequest } from "./helpers/data";
import { buildURL } from "./helpers/url";
import { AxiosHttpRequestConfig } from "./types";

function axios(config: AxiosHttpRequestConfig): void{
  processConfig(config);
  xhr(config);
}

function processConfig(config: AxiosHttpRequestConfig):void{
  config.url = transformUrl(config);
  config.data = transformRequest(config.data);
}

function transformUrl(config: AxiosHttpRequestConfig): string{
  const { url, params} = config;
  return buildURL(url, params);
}

export default axios;