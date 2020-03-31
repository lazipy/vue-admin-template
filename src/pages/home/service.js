import request from '@/utils/request'

/**
 * GET 请求
 */
export function query (params) {
  return request({
    url: '/mock/userInfo',
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
