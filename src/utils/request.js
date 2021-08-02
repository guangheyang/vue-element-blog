import axios from 'axios'

const service = axios.create({
    // baseURL: 'yangguang.he.cn:8080/person_node',
    baseURL: 'http://192.168.1.30:12306',
    timeout: 5000
})

// request interceptor
// service.interceptors.request.use(
//     config => {
//         // if (store.getters.token) {
//         //     config.headers['X-Token'] = getToken()
//         // }
//         // return config
//     },
//     error => {
//         console.log(error) // for debug
//         return Promise.reject(error)
//     }
// )

// response interceptor
service.interceptors.response.use(
    response => {
        const res = response.data
        if (res.code !== 20000) {
            return Promise.reject(new Error(res.message || 'Error'))
        } else {
            console.log(res, 'rfe')
            return res
        }
    },
    error => {
        console.log('err' + error)
        return Promise.reject(error)
    }
)

export default service
