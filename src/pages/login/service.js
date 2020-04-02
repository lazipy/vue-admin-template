import request from '@/utils/request'

/**
 * 登录
 */
export function login (params) {
  return request({
    url: '/mock/login',
    method: 'get',
    params
  })
}

/**
 * POST 请求
 */
export function post (data) {
  return request({
    url: '/',
    method: 'post',
    data
  })
}
