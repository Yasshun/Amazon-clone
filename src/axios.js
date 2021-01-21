import axios from 'axios';

const instance = axios.create({
    // API URL
    baseURL: 'https://us-central1-clone-ef7f9.cloudfunctions.net/api'
});

export default instance;