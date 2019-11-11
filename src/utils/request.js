import axios from 'axios'

const httpServer = axios.create({
    baseURL: '',
    timeout: 5000,
})

// 请求拦截
httpServer.interceptors.request.use(config=>{
    return config;
}, error=>{
    return Promise.reject(error);
})

// 响应拦截
httpServer.interceptors.response.use(response=>{
    const res = response.data;
    if(res.status>0){
        return res;
    } else{
        return Promise.reject(new Error(res.msg || 'Error'));
    }
}, error=>{
    return Promise.reject(error);
})

export default httpServer;