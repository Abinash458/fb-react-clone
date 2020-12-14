import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://fb-react-clone.herokuapp.com' // production
    // baseURL: 'http://localhost:9000' // development
});

export default instance;