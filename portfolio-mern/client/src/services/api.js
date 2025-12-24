import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const projectService = {
    getAll: () => api.get('/projects'),
    getFeatured: () => api.get('/projects/featured'),
    getById: (id) => api.get(`/projects/${id}`)
};

export const skillService = {
    getAll: () => api.get('/skills'),
    getByCategory: (category) => api.get(`/skills/category/${category}`)
};

export const contactService = {
    submit: (data) => api.post('/contact', data)
};

export default api;
