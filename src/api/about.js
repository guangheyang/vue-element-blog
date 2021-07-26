import request from '@/utils/request'
// 获取blog列表
export function queryBlog(params) {
    return request({
        url: '/queryBlog',
        method: 'get',
        params
    })
}
