import { Navigate } from 'react-router-dom'
import useStore from '../store/useStore'

export default function ProtectedRoute({ children }) {
  const isLoggedIn = useStore((state) => state.isLoggedIn)
  const user = useStore((state) => state.user)
  const hasLocalSession =
    !!localStorage.getItem('token') ||
    !!localStorage.getItem('g_access') ||
    !!localStorage.getItem('user')

  if (!isLoggedIn && !user && !hasLocalSession) {
    return <Navigate to="/login" replace />
  }

  return children
}
