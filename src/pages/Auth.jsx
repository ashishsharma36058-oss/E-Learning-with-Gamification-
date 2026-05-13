import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import useStore from '../store/useStore'

function AuthPage({ mode }) {
  const store = useStore()
  const isLogin = mode === 'login'

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  })

  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)

  useEffect(() => {
    if (isLogin) {
      const savedUsername = localStorage.getItem('saved_username')
      const savedPassword = localStorage.getItem('saved_password')

      if (savedUsername && savedPassword) {
        setForm((f) => ({
          ...f,
          username: savedUsername,
          password: savedPassword
        }))
        setRememberMe(true)
      }
    }
  }, [isLogin])

  const update = (key) => (e) => {
    setForm((f) => ({
      ...f,
      [key]: e.target.value
    }))
  }

  const validate = () => {
    const e = {}

    if (!form.username.trim()) e.username = 'Username is required'
    if (!isLogin && !form.email.trim()) e.email = 'Email is required'
    if (!form.password.trim()) e.password = 'Password is required'

    setErrors(e)
    return Object.keys(e).length === 0
  }

  const saveLoginDetails = () => {
    if (rememberMe) {
      localStorage.setItem('saved_username', form.username.trim())
      localStorage.setItem('saved_password', form.password.trim())
    } else {
      localStorage.removeItem('saved_username')
      localStorage.removeItem('saved_password')
    }
  }

  const getUsers = () => {
    try {
      return JSON.parse(localStorage.getItem('registeredUsers') || '[]')
    } catch {
      return []
    }
  }

  const saveUserSession = (userData) => {
    const cleanUser = {
      ...userData,
      token: userData?.token || 'local-token',
      xp: Number(userData?.xp ?? userData?.total_xp ?? 0),
      total_xp: Number(userData?.total_xp ?? userData?.xp ?? 0),
      level: Number(userData?.level ?? 1)
    }

    localStorage.setItem('registeredUser', JSON.stringify(cleanUser))
    localStorage.setItem('user', JSON.stringify(cleanUser))
    localStorage.setItem('token', cleanUser.token)
    localStorage.setItem('g_access', cleanUser.token)
    localStorage.setItem('g_refresh', 'local-refresh-token')

    if (store?.login) store.login(cleanUser)
    else if (store?.setUser) store.setUser(cleanUser)
  }

  const submit = async () => {
    if (!validate()) return

    setLoading(true)

    try {
      const username = form.username.trim()
      const email = form.email.trim()
      const password = form.password.trim()

      if (isLogin) {
        const savedUsers = getUsers()
        const oldSingleUser = JSON.parse(localStorage.getItem('registeredUser') || 'null')
        const savedUser =
          savedUsers.find((u) => u.username === username) ||
          (oldSingleUser?.username === username ? oldSingleUser : null)

        if (!savedUser) {
          toast.error('Account nahi mila. Pehle Sign up karo.')
          setLoading(false)
          return
        }

        if (String(savedUser.password) !== String(password)) {
          toast.error('Invalid username or password')
          setLoading(false)
          return
        }

        saveUserSession(savedUser)
        saveLoginDetails()

        toast.success('Login successful!')
        window.location.href = '/dashboard'
        return
      }

      const existingUsers = getUsers()

      if (existingUsers.some((u) => u.username === username)) {
        toast.error('Username already exists. Login karo ya naya username lo.')
        setLoading(false)
        return
      }

      const userData = {
        id: Date.now(),
        username,
        email,
        password,
        xp: 0,
        total_xp: 0,
        level: 1,
        completed_challenges: 0,
        token: 'local-token'
      }

      localStorage.setItem('registeredUsers', JSON.stringify([...existingUsers, userData]))
      saveUserSession(userData)
      saveLoginDetails()

      toast.success('Account created successfully!')
      window.location.href = '/dashboard'
      return
    } catch (err) {
      toast.error('Login/Register failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="auth-cyber-bg">
        <div className="cyber-grid"></div>
        <div className="cyber-line"></div>
        <div className="cyber-line"></div>
        <div className="cyber-line"></div>
      </div>

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 24,
          background: 'var(--bg-0)'
        }}
      >
        <div style={{ width: '100%', maxWidth: 420 }}>
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 14,
                margin: '0 auto 16px',
                background: 'linear-gradient(135deg, var(--purple), var(--orange))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 22,
                fontWeight: 800,
                color: '#fff'
              }}
            >
              G
            </div>

            <h1 style={{ fontSize: 26, marginBottom: 6 }}>
              {isLogin ? 'Welcome back' : 'Join Gamify'}
            </h1>

            <p style={{ fontSize: 14, color: 'var(--text-3)' }}>
              {isLogin ? 'Sign in to continue your journey' : 'Start your coding adventure today'}
            </p>
          </div>

          <div className="card" style={{ padding: '28px 28px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div>
                <label style={labelStyle}>USERNAME</label>
                <input
                  value={form.username}
                  onChange={update('username')}
                  onKeyDown={(e) => e.key === 'Enter' && submit()}
                  placeholder="your_username"
                  autoComplete="username"
                  style={errors.username ? { borderColor: 'var(--red)' } : {}}
                />
                {errors.username && <div style={errorStyle}>{errors.username}</div>}
              </div>

              {!isLogin && (
                <div>
                  <label style={labelStyle}>EMAIL</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={update('email')}
                    onKeyDown={(e) => e.key === 'Enter' && submit()}
                    placeholder="you@example.com"
                    autoComplete="email"
                    style={errors.email ? { borderColor: 'var(--red)' } : {}}
                  />
                  {errors.email && <div style={errorStyle}>{errors.email}</div>}
                </div>
              )}

              <div>
                <label style={labelStyle}>PASSWORD</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={form.password}
                  onChange={update('password')}
                  onKeyDown={(e) => e.key === 'Enter' && submit()}
                  placeholder="Enter your password"
                  autoComplete={isLogin ? 'current-password' : 'new-password'}
                  style={errors.password ? { borderColor: 'var(--red)' } : {}}
                />

                <div style={{ marginTop: 10, display: 'grid', gap: 8 }}>
                  <label style={checkStyle}>
                    <input
                      type="checkbox"
                      checked={showPassword}
                      onChange={() => setShowPassword(!showPassword)}
                      style={{ marginRight: 6 }}
                    />
                    Show Password
                  </label>

                  {isLogin && (
                    <label style={checkStyle}>
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={() => setRememberMe(!rememberMe)}
                        style={{ marginRight: 6 }}
                      />
                      Remember Me
                    </label>
                  )}
                </div>

                {errors.password && <div style={errorStyle}>{errors.password}</div>}
              </div>

              <button
                className="btn btn-primary"
                style={{
                  width: '100%',
                  padding: '13px',
                  fontSize: 15,
                  marginTop: 4,
                  borderRadius: 12
                }}
                onClick={submit}
                disabled={loading}
              >
                {loading ? 'Please wait...' : isLogin ? 'Sign In →' : 'Create Account →'}
              </button>
            </div>

            <div
              style={{
                textAlign: 'center',
                marginTop: 22,
                fontSize: 13,
                color: 'var(--text-3)'
              }}
            >
              {isLogin ? (
                <>
                  No account?{' '}
                  <Link
                    to="/register"
                    style={{
                      color: 'var(--purple-light)',
                      textDecoration: 'none',
                      fontWeight: 600
                    }}
                  >
                    Sign up free
                  </Link>
                </>
              ) : (
                <>
                  Already have an account?{' '}
                  <Link
                    to="/login"
                    style={{
                      color: 'var(--purple-light)',
                      textDecoration: 'none',
                      fontWeight: 600
                    }}
                  >
                    Sign in
                  </Link>
                </>
              )}
            </div>
          </div>

          {!isLogin && (
            <p
              style={{
                textAlign: 'center',
                marginTop: 16,
                fontSize: 11,
                color: 'var(--text-4)'
              }}
            >
              Free forever. No credit card required.
            </p>
          )}
        </div>
      </div>
    </>
  )
}

const labelStyle = {
  fontSize: 12,
  color: 'var(--text-2)',
  display: 'block',
  marginBottom: 8,
  fontWeight: 600
}

const errorStyle = {
  fontSize: 11,
  color: 'var(--red)',
  marginTop: 5
}

const checkStyle = {
  cursor: 'pointer',
  fontSize: 14,
  color: 'white'
}

export const LoginPage = () => <AuthPage mode="login" />
export const RegisterPage = () => <AuthPage mode="register" />
