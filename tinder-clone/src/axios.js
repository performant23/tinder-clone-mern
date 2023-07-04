import axios from 'axios';

const inst = axios.create({
    baseURL : 'https://tinder-clone-mern.onrender.com/',
});

export default inst;