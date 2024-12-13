import axios from 'axios';

export default axios.create({
    baseURL: ' https://51d2-42-116-6-42.ngrok-free.app',
    headers:{"ngrok-skip-browser-warning": "true"}
});