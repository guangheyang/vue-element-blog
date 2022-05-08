import request from '@/utils/request'
// 获取用户信息
export function queryUser(params) {
  return request({
    url: '/queryUser',
    method: 'get',
    params
  })
}
