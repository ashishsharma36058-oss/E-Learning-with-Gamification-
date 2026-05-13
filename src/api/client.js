import axios from 'axios'

const api = axios.create({
  baseURL: 'https://e-learning-with-gamification-2.onrender.com/api',
  timeout: 15000
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('g_access')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

api.interceptors.response.use(
  (res) => res,
  async (err) => {
    const original = err.config
    if (err.response?.status === 401 && !original._retry) {
      original._retry = true
      try {
        const refresh = localStorage.getItem('g_refresh')
        if (!refresh) throw new Error('no refresh')
        const { data } = await axios.post('https://e-learning-with-gamification-2.onrender.com/api/auth/refresh', { refresh_token: refresh })
        localStorage.setItem('g_access', data.access_token)
        localStorage.setItem('g_refresh', data.refresh_token)
        original.headers.Authorization = `Bearer ${data.access_token}`
        return api(original)
      } catch {
        localStorage.removeItem('g_access')
        localStorage.removeItem('g_refresh')
        window.location.href = '/login'
      }
    }
    return Promise.reject(err)
  }
)

export default api
