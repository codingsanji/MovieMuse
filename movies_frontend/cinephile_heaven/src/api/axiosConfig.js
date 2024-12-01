import axios from 'axios';

export default axios.create({
    baseURL: 'https://0fa9-171-250-164-127.ngrok-free.app',
    headers:{"ngrok-skip-browser-warning": "true"}
});