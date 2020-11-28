/**
 * 封装 axios 请求模块
 */
import axios from 'axios'
import store from '@/store'

const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/' // 基础路径
})
// 请求拦截器
// Add a request interceptor
request.interceptors.request.use(
  function(config) {
    // 请求与发起会经过这里

    // config：本次请求的配置对象
    const { user } = store.state
    if (user && user.token) {
      config.headers.Authorization = `Bearer ${user.token}`
    }
    // console.log(config)
    return config
  },
  function(error) {
    // D如果请求失败（还没发送出去）会经过这里
    return Promise.reject(error)
  }
)
// 响应拦截器
export default request
