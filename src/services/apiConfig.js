import axios from 'axios';

const apiUrl = 'https://api-plataforma-pedagogica-rn7v.onrender.com/';

const api = axios.create({
  baseURL: apiUrl,
});

export default api;
