// import axios from 'axios';

// const API_BASE = 'http://localhost:5000/api';

// export const api = {
//   getFoods: () => axios.get(`${API_BASE}/foods`),
//   getFoodById: (id) => axios.get(`${API_BASE}/foods/${id}`),
//   getCategories: () => axios.get('/api/categories'),
//   createOrder: (orderData) => axios.post(`${API_BASE}/orders`, orderData),
// };


import axios from 'axios';

// Use environment variable for API URL (Render) or localhost for dev
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL ? `${import.meta.env.VITE_API_URL}/api` : 'http://localhost:5000/api',
  timeout: 15000,
});

// Global error logging — helps you see what's wrong
API.interceptors.response.use(
  response => response,
  error => {
    console.error('API CALL FAILED:', {
      url: error.config?.url,
      method: error.config?.method,
      status: error.response?.status,
      message: error.response?.data?.msg || error.message || 'Unknown error'
    });
    return Promise.reject(error);
  }
);

export const api = {
  getFoods: () => API.get('/foods'),
  getFoodById: (id) => API.get(`/foods/${id}`),
  getCategories: () => API.get('/categories'),

  // Orders
  createOrder: (orderData) => API.post('/orders', orderData),
  getOrders: () => API.get('/orders'),
  getOrdersByEmail: (email) => API.get(`/orders/user/${email}`),
  updateOrderStatus: (orderId, status) => API.patch(`/orders/${orderId}/status`, { status }),

  // Auth - Customer endpoints for main website
  login: (credentials) => API.post('/auth/customer-login', credentials),
  register: (userData) => API.post('/auth/register', userData),

  // Cart - User-specific cart management
  getUserCart: (userId) => API.get(`/carts/${userId}`),
  saveUserCart: (userId, items) => API.post(`/carts/${userId}`, { items }),
  clearUserCart: (userId) => API.delete(`/carts/${userId}`),
};