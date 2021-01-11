import request from '@/utils/request'
// 获取blog列表
export function queryBlog(params) {
    return request({
        url: '/queryBlog',
        method: 'get',
        params
    })
}
// 获取blog总数
export function totalBlog() {
    return request({
        url: '/totalBlog',
        method: 'get'
    })
}
// 添加查看数量
export function addSeeNum(id) {
    return request({
        url: 'addSeeNum',
        method: 'get',
        params: { id }
    })
}
// 根据id获取blog内容
export function blogContent(id) {
    return request({
        url: 'blogContent',
        method: 'get',
        params: { id }
    })
}

export function queryBlogComment(blog_id) {
    return request({
        url: 'queryBlogComment',
        method: 'get',
        params: { blog_id }
    })
}
