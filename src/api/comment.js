import request from '@/utils/request'
// 提交评论
export function insertComment(data) {
    return request({
        url: '/insertComment',
        method: 'post',
        data
    })
}
