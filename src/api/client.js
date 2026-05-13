import axios from 'axios'

const api = axios.create({
  baseURL: 'https://e-learning-with-gamification-2.onrender.com/api',
  timeout: 15000
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('g_access') || localStorage.getItem('token')
  if (token && token !== 'local-token') {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

api.interceptors.response.use(
  (res) => res,
  (err) => {
    return Promise.reject(err)
  }
)

export default api
