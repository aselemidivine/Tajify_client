import axios from 'axios';

export default axios.create({
    // baseURL: 'http://localhost:3500/api'
    baseURL: 'http://localhost:3005/api/users'
});