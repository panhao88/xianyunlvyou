import axios from 'axios'
import nprogress from 'nprogress'

// 运行环境: 本地环境:devlpment 和线上(生产)环境: production
const isPro = process.env.NODE_ENV === 'production'

// 创建一个axios的实例
const service = axios.create({
  // 基础路径: 需要根据当前的运行环境来判断
  baseURL: isPro ? '线上的接口路径' : '/api',
  // 超时时间
  timeout: 100000
})


// 请求拦截: 每一次发请求都会做的事情
service.interceptors.request.use((config) => {
  nprogress.start()
  // 前后端鉴权
  // jwt: JSON WEB TOKEN
  // 登录成功之后 后端会返回一个令牌
  let token = localStorage.getItem('adminToken')
  if (token) {
    // 需要在请求头当中添加token
    config.headers['Authorizations'] = token 
  }
  return config
}, err => {
  nprogress.done()
  return Promise.reject(err)
})


// 响应拦截: 每一次接口返回数据的时候都会做的事情
service.interceptors.response.use((res) => {
  nprogress.done()
  return res.data
}, err => {
  if (err.response && err.response.status) {
    // 错误请求的状态码
    let status = err.response.status
    if (status === 400) {
      console.log('参数错误');
    }
    if (status === 401) {
     console.log('登录过期,请重新登录');
    }
    if (status === 403) {
     console.log('没有权限');
    }
    if (status === 404) {
    console.log('接口路径错误');
    }
    if (status === 500) {
      console.log('服务器出错');
    }
    if (status === 503) {
      console.log('服务器在维护');
    }
  }
  return Promise.reject(err)
})


export default service