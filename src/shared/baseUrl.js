import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://fb-react-clone.herokuapp.com'
});

export default instance;