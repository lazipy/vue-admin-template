/**
 * 请求配置文件
 */
import axios from 'axios'
import qs from 'qs'
import { Message } from 'element-ui'
import { statusErrorMessage, codeErrorMessage } from '@/config/errorTips'

// 创建axios实例
const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL, // 设置默认的BASE_URL
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Accept: 'application/json'
  }, // 数据格式 默认JSON
  withCredentials: true, // 是否共享cookie
  timeout: 60 * 1000 // 请求超时时间
})

// 请求前的拦截器
request.interceptors.request.use(
  config => {
    if (config.method === 'post') {
      // 设置参数拼接方式
      if (
        config.data &&
        config.headers['Content-Type'] === 'application/x-www-form-urlencoded'
      ) {
        config.data = qs.stringify(config.data)
      }
    } else {
      if (config.data) {
        config.url = config.url + '?' + qs.stringify(config.data)
      }
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应前的拦截器
request.interceptors.response.use(
  res => {
    if (res) {
      if (res.data && res.data.code) {
        if (res !== 0) {
          const msg = codeErrorMessage[res.data.code] || '返回未知错误'
          Message.error(msg)
          return Promise.reject(msg)
        }
      }
    } else {
      const msg = '响应成功，但是响应信息不存在'
      Message.error(msg)
      return Promise.reject(msg)
    }
    return res.data
  },
  error => {
    if (error.response) {
      if (error.response.status > 300) {
        const msg = statusErrorMessage[error.response.status]
        Message.error(msg || '网络开了个小差，请刷新重试')
      }
    }
    return Promise.reject(error)
  }
)

export default request
