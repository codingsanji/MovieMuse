import axios from 'axios';

export default axios.create({
    baseURL: ' https://2ed3-171-250-165-104.ngrok-free.app',
    headers:{"ngrok-skip-browser-warning": "true"}
});