import axios, { AxiosError, AxiosPromise } from '../../src/index'

// axios({
//   url: '/extend/post',
//   method: 'post',
//   data: {
//     msg: 'hi'
//   }
// })

// axios.request({
//   url: '/extend/post',
//   method: 'post',
//   data: {
//     msg: 'hello'
//   }
// })

// axios.get('/extend/get')

// axios.options('/extend/options')

// axios.delete('/extend/delete')

// axios.head('/extend/head')

// axios.post('/extend/post', { msg: 'post' })

// axios.put('/extend/put', { msg: 'put' })

// axios.patch('/extend/patch', { msg: 'patch' })

axios('/extend/post',{
  method: 'post',
  data: {
    msg: 'hi'
  }
})

axios({
  url: '/extend/post',
  method: 'post',
  data: {
    msg: 'hello'
  }
})

interface ResponseData<T = any> {
  code: number
  result: T
  message: string
}

interface User {
  name: string,
  age: number
}

function getUser<T>(): Promise<void | ResponseData<T>>{
  return axios<ResponseData<T>>('/extend/user')
  .then(res => {
    return res?.data
  }).catch((e: AxiosError) => {
    console.log(e);
  })
}

async function test() {
  const user = await getUser<User>()
  if (user) {
    console.log(user.result.name);
  }
}

test();