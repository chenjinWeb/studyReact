import axios from 'axios'
import {message,notification} from 'antd'

let instance = axios.create({
    baseURL:'/api',
    timeout:5000
})

message.list = [];

instance.interceptors.request.use((config)=>{
    message.loading('加载中...',0)
    message.list.push(1);
    return config
},(error)=>{
    message.list.pop();
    message.list.length === 0 && message.destroy();
    return Promise.reject(error)
})

instance.interceptors.response.use((response)=>{
    message.list.pop();
    message.list.length === 0 && message.destroy();
    if(response.data.success === 500){
        notification.error({
            message:`${response.data.errorText}`,
            duration:2
        })
    }
    return response.data
},(error)=>{
    message.list.pop();
    message.list.length === 0 && message.destroy();
    return Promise.reject(error);
})

const http = instance;

export default http;



