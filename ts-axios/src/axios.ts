import xhr from "./functions/xhr";
import { transformRequest, transformResponse } from "./helpers/data";
import { processHeaders } from "./helpers/headers";
import { buildURL } from "./helpers/url";
import { AxiosHttpRequestConfig, AxiosPromise, AxiosResponse } from "./types";

function axios(config: AxiosHttpRequestConfig): AxiosPromise{
  processConfig(config);
  return xhr(config)
  .then(res => {
    return transformResponseData(res);
  });
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

function transformResponseData(res: AxiosResponse): AxiosResponse {
  res.data = transformResponse(res.data)
  return res
}

export default axios;