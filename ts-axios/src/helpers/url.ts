import { isDate, isPlainObject } from "./utils";

function encode(val: string): string{
  return encodeURIComponent(val)
  .replace(/%40/g, '@')
  .replace(/%3A/gi, ':')
  .replace(/%24/g, '$')
  .replace(/%2C/gi, ',')
  .replace(/%20/g, '+')
  .replace(/%5B/gi, '[')
  .replace(/%5D/gi, ']')
}

export function buildURL(url: string, params?:any): string {
  if (!params) {
    return url;
  }

  const parts: string[] = [];
  Object.keys(params).forEach(key => {
    const val = params[key];
    if (val == null || typeof val === 'undefined') {
      return;
    }
    let values = [];
    if (Array.isArray(val)) {
      values = val;
    }else{
      values = [val];
    }
    values.forEach(v => {
      if (isDate(v)) {
        v = v.toISOString()
      }else if(isPlainObject(v)){
        v = JSON.stringify(v);
      }
      parts.push(`${encode(key)}=${encode(v)}`);
    })
  });
  let serializedParams = parts.join('&');
  if (serializedParams) {
      // 处理hash：/base/get#hash
      const markIndex = url.indexOf('#')
      if (markIndex !== -1) {
        url = url.slice(0, markIndex)
      } 
      url += (url.indexOf('?') === -1 ? '?': '&') + serializedParams 
  }
  return url;
}