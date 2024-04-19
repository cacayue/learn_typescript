const toString = Object.prototype.toString;

export function isDate(val: any): val is Date{
  return toString.call(val) === '[object Date]';
}

// export function isObject(val: any): val is Object{
//   return val !== null && typeof val == 'object';
// }

export function isPlainObject(val: any): val is Object{
  return toString.call(val) === '[object Object]';
}

export function extend<T, U>(to: T, form: U): T & U{
  for (const key in form) {
    const element = form[key];
    ;(to as T & U )[key] = element as any;
  }
  return to as T & U;
}
