import xhr from "./functions/xhr";
import { buildURL } from "./helpers/url";
import { AxiosHttpRequestConfig } from "./types";

function axios(config: AxiosHttpRequestConfig): void{
  processConfig(config);
  xhr(config);
}

function processConfig(config: AxiosHttpRequestConfig):void{
  config.url = transformUrl(config);
}

function transformUrl(config: AxiosHttpRequestConfig): string{
  const { url, params} = config;
  return buildURL(url, params);
}

export default axios;