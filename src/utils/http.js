import axios from 'axios';

axios.defaults.timeout = 100000;
axios.defaults.baseURL = "/api/es";

export function get(url, params){    
    return new Promise((resolve, reject) =>{        
        axios.get(url, {            
            params: params        
        }).then(res => {
            resolve(res.data);
        }).catch(err =>{
            reject(err.data)     
    })    
});}

export function post(url, params) {
    return new Promise((resolve, reject) => {
         axios.post(url, params)
        .then(res => {
            resolve(res.data);
        })
        .catch(err =>{
            reject(err)
        })
    });
}

export function del(url, params) {
    return new Promise((resolve, reject) => {
         axios.delete(url, params)
        .then(res => {
            resolve(res.data);
        })
        .catch(err =>{
            reject(err.data)
        })
    });
}

export function put(url, params) {
    return new Promise((resolve, reject) => {
         axios.put(url, params)
        .then(res => {
            resolve(res.data);
        })
        .catch(err =>{
            reject(err.data)
        })
    });
}