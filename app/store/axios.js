import axios from 'axios';

export default axios.create({
    baseURL: 'http://ayni-back.herokuapp.com/',
    //baseURL: 'http://192.168.1.140:9994/',
    timeout: 7000,
    headers:{
        'Content-Type': 'application/json'
    }
});