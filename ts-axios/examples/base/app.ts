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