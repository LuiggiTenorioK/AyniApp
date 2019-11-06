import axios from 'axios';

export default axios.create({
    baseURL: 'http://ayni-back.herokuapp.com/',
    timeout: 7000,
    headers:{
        'Content-Type': 'application/json'
    }
});