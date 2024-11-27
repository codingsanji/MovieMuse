import axios from 'axios';

export default axios.create({
    baseURL: 'https://f151-171-243-62-219.ngrok-free.app',
    headers:{"ngrok-skip-browser-warning": "true"}
});