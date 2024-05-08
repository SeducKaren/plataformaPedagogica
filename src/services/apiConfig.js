import axios from 'axios';

const apiUrl = 'https://api-plataforma-pedagogica-zc02.onrender.com';

const api = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
  }
});

export default api;
