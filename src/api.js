import axios from 'axios';

/**
 * Default configuration api.
 * @type axios
 */
const api = axios.create({
    baseURL: 'https://api.github.com',
});

export default api;
