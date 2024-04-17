import { contentCamelKey } from "../types/const";
import { isPlainObject } from "./utils";



function normalizeHeaderName(headers: any, normalizeHeaderName:string): void{
  if (!headers) {
    return;
  }
  Object.keys(headers).forEach(name => {
    if (name !== normalizeHeaderName &&
      name.toUpperCase() === normalizeHeaderName.toUpperCase()
    ) {
      headers[normalizeHeaderName] = headers[name];
      delete headers[name];
    }
  })
}

export function processHeaders(headers: any, data: any): any{
  normalizeHeaderName(headers, contentCamelKey);
  
  if (isPlainObject(data)) {
      if (headers && !headers[contentCamelKey]) {
        headers[contentCamelKey] = 'application/json;charset=utf-8'
      }
  }

  return headers;
}