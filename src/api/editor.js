import request from '@/utils/request'
// 提交博客
export function insertBlog(data) {
    return request({
        url: 'insertBlog',
        method: 'post',
        data
    })
}
