import axios from "../../src";

let date = new Date();

axios({
  method: 'get',
  url: '/base/get#hash',
  params: {
    a: date,
    b: 2,
    c: undefined,
    d: `$##@[]hhhaaa`,
    e: "11"   
  }
})

axios({
  method: 'post',
  url: '/base/post',
  headers: {
    'content-type': 'application/json;charset=utf-8'
  },
  data: {
    a: 1,
    b: 2
  }
})

const arr = new Int32Array([21, 31])
axios({
  method: 'post',
  url: '/base/buffer',
  data: arr
})