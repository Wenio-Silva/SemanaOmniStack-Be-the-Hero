import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.16.10.105:3333'
});

export default api;