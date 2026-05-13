import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import useStore from './store/useStore'
import Navbar from './components/Navbar'
import ProtectedRoute from './components/ProtectedRoute'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import Play from './pages/Play'
import GamePlay from './pages/GamePlay'
import Leaderboard from './pages/Leaderboard'
import { LoginPage, RegisterPage } from './pages/Auth'

export default function App() {
  const store = useStore()

  const fetchMe = store?.fetchMe || (() => {})

  const isLoggedIn =
    !!localStorage.getItem('g_access') ||
    !!localStorage.getItem('token') ||
    !!localStorage.getItem('user')

  useEffect(() => {
    if (isLoggedIn) {
      try {
        fetchMe()
      } catch (e) {
        console.log('fetchMe skipped')
      }
    }
  }, [])

  return (
    <BrowserRouter>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: 'var(--bg-3)',
            color: 'var(--text-1)',
            border: '1px solid var(--border-bright)',
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 13,
            borderRadius: 10
          },
          success: {
            iconTheme: {
              primary: '#10b981',
              secondary: '#052e16'
            }
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#1a0505'
            }
          }
        }}
      />

      <Routes>
        {/* Auth Pages */}
        <Route
          path="/login"
          element={
            isLoggedIn
              ? <Navigate to="/dashboard" replace />
              : <LoginPage />
          }
        />

        <Route
          path="/register"
          element={
            isLoggedIn
              ? <Navigate to="/dashboard" replace />
              : <RegisterPage />
          }
        />

        {/* Main App */}
        <Route
          path="/*"
          element={
            <>
              <Navbar />

              <Routes>
                <Route
                  path="/"
                  element={
                    isLoggedIn
                      ? <Navigate to="/dashboard" replace />
                      : <Landing />
                  }
                />

                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="/play"
                  element={
                    <ProtectedRoute>
                      <Play />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="/play/:id"
                  element={
                    <ProtectedRoute>
                      <GamePlay />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="/leaderboard"
                  element={
                    <ProtectedRoute>
                      <Leaderboard />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="*"
                  element={<Navigate to="/" replace />}
                />
              </Routes>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
