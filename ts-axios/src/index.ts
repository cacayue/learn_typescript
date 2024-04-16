import xhr from "./functions/xhr";
import { AxiosHttpRequestConfig } from "./types";

function axios(config: AxiosHttpRequestConfig): void{
  xhr(config);
}

export default axios;