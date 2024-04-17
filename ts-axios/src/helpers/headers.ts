import { contentCamelKey } from "../types/const";
import { isPlainObject } from "./utils";


/**
 * 统一大小写
 * @param headers 请求头
 * @param normalizeHeaderName 要替换的请求头key
 * @returns 
 */
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

/**
 * 处理headers,将普通对象的Content-Type填充为application/json;charset=utf-8
 * @param headers 请求头
 * @param data 数据
 * @returns 替换后的请求头
 */
export function processHeaders(headers: any, data: any): any{
  normalizeHeaderName(headers, contentCamelKey);
  
  if (isPlainObject(data)) {
      if (headers && !headers[contentCamelKey]) {
        headers[contentCamelKey] = 'application/json;charset=utf-8'
      }
  }

  return headers;
}

/**
 * 处理字符串headers拼接返回对象
 * 返回数据为\r\n 结束的字符，对象通过':'分隔
 * date: Fri, 05 Apr 2019 12:40:49 GMT
etag: W/"d-Ssxx4FRxEutDLwo2+xkkxKc4y0k"
connection: keep-alive
x-powered-by: Express
content-length: 13
content-type: application/json; charset=utf-8
 * @param headers 字符串响应头
 * @returns 构建的对象
 */
export function parseHeaders(headers: string): any{
  let parsed = Object.create(null);
  if (!headers) {
    return parsed;
  }
  let headerArray =  headers.split(`\r\n`);
  headerArray.forEach(line => {
    let [key, val] = line.split(':');
    key = key.trim().toLowerCase();
    if (!key) {
      return;
    }
    if (val) {
      val = val.trim();
    }
    parsed[key] = val;
  })

  return parsed;
}