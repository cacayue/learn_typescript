import {  isPlainObject } from "./utils";

export function transformRequest(data: any): any{
  if (isPlainObject(data)) {
    return JSON.stringify(data);
  }
  return data;
} 

export function transformResponse(data: any): any{
  if (data !== '' && typeof data === 'string') {
    try {
      data = JSON.parse(data);
    } catch (error) {
      console.log(error);
    }
  }
  return data;
} 
