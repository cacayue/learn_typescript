import axios from "../../src";
import { AxiosError } from "../../src/helpers/error";

axios({
  method: 'get',
  url: '/error/get1',
}).then(res => {
  console.log(res);
  
}).catch(e => {
  console.log(e);
  
})

axios({
  method: 'get',
  url: '/error/get',
}).then(res => {
  console.log(res);
  
}).catch((e: AxiosError) => {
  console.log(e);
  
})

setTimeout(() => {
  axios({
    method: 'get',
    url: '/error/get',
  }).then(res => {
    console.log(res);
    
  }).catch((e: AxiosError) => {
    console.log(e);
    
  })
}, 5000);

axios({
  method: 'get',
  url: '/error/get',
  timeout: 2000
}).then(res => {
  console.log(res);
  
}).catch((e: AxiosError) => {
  console.log(e.message);
  console.log(e.response);
})