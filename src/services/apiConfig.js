import axios from 'axios';

const apiUrl = 'https://api-plataforma-pedagogica-zc02.onrender.com';

const api = axios.create({
  baseURL: apiUrl,
});

export default api;
