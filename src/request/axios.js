import axios from 'axios'

let instance = axios.create({
    baseURL:'/api',
    timeout:5000
})

instance.interceptors.request.use((config)=>{
    console.info(config)
    return config
},(error)=>{
    return Promise.reject(error)
})

instance.interceptors.response.use((response)=>{
    console.info(response)
    if(response.data.success == 500){
        alert(response.data.errorText)
    }
    return response.data
},(error)=>{
    return Promise.reject(error);
})

const http = instance;

export default http;



