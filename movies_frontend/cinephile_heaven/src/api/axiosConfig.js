import axios from 'axios';

export default axios.create({
    baseURL: 'https://23f1-171-250-165-239.ngrok-free.app',
    headers:{"ngrok-skip-browser-warning": "true"}
});