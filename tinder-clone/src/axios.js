import axios from 'axios';

const inst = axios.create({
    baseURL : 'http://localhost:8001',
});

export default inst;