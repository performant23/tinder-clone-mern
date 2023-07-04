import axios from 'axios';

const inst = axios.create({
    baseURL : 'https://tinder-clone-db472.web.app/',
});

export default inst;