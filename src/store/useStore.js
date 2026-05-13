import { create } from 'zustand'

const safeJson = (key, fallback) => {
  try {
    const value = localStorage.getItem(key)
    return value ? JSON.parse(value) : fallback
  } catch {
    return fallback
  }
}

const normalizeUser = (user = null) => {
  if (!user) return null

  return {
    id: user.id || Date.now(),
    username: user.username || user.name || 'Coder',
    email: user.email || '',
    password: user.password || '',
    xp: Number(user.xp ?? user.total_xp ?? localStorage.getItem('xp') ?? 0),
    total_xp: Number(user.total_xp ?? user.xp ?? localStorage.getItem('xp') ?? 0),
    level: Number(user.level ?? localStorage.getItem('level') ?? 1),
    completed_challenges: Number(
      user.completed_challenges ?? safeJson('solvedChallenges', []).length ?? 0
    ),
    token: user.token || localStorage.getItem('token') || 'local-token'
  }
}

const initialUser = normalizeUser(safeJson('user', null))
const hasToken = !!localStorage.getItem('token') || !!localStorage.getItem('g_access')

const persistUser = (user) => {
  const cleanUser = normalizeUser(user)
  if (!cleanUser) return null

  localStorage.setItem('user', JSON.stringify(cleanUser))
  localStorage.setItem('token', cleanUser.token || 'local-token')
  localStorage.setItem('g_access', cleanUser.token || 'local-token')

  return cleanUser
}

const useStore = create((set, get) => ({
  user: initialUser,
  isLoggedIn: !!initialUser || hasToken,
  isAuthenticated: !!initialUser || hasToken,

  xp: Number(localStorage.getItem('xp')) || initialUser?.xp || 0,
  level: Number(localStorage.getItem('level')) || initialUser?.level || 1,

  solvedChallenges: safeJson('solvedChallenges', []),

  setUser: (userData) => {
    const user = persistUser(userData)
    if (!user) return

    localStorage.setItem('xp', String(user.xp))
    localStorage.setItem('level', String(user.level))

    set({
      user,
      xp: user.xp,
      level: user.level,
      isLoggedIn: true,
      isAuthenticated: true
    })
  },

  fetchMe: async () => {
    const saved = normalizeUser(safeJson('user', null))
    if (saved) {
      get().setUser(saved)
      return saved
    }
    return null
  },

  login: (userData) => {
    const user = persistUser(userData)
    if (!user) return

    set({
      user,
      xp: user.xp,
      level: user.level,
      isLoggedIn: true,
      isAuthenticated: true
    })
  },

  register: (userData) => {
    const user = persistUser(userData)
    if (!user) return

    const users = safeJson('registeredUsers', [])
    const withoutSameUser = users.filter((u) => u.username !== user.username)
    localStorage.setItem('registeredUsers', JSON.stringify([...withoutSameUser, user]))
    localStorage.setItem('registeredUser', JSON.stringify(user))

    set({
      user,
      xp: user.xp,
      level: user.level,
      isLoggedIn: true,
      isAuthenticated: true
    })
  },

  logout: () => {
    localStorage.removeItem('token')
    localStorage.removeItem('g_access')
    localStorage.removeItem('g_refresh')
    localStorage.removeItem('user')

    set({
      user: null,
      isLoggedIn: false,
      isAuthenticated: false
    })
  },

  addXP: (amount) =>
    set((state) => {
      const newXP = Number(state.xp || 0) + Number(amount || 0)
      let newLevel = Number(state.level || 1)

      while (newXP >= newLevel * 300) {
        newLevel += 1
      }

      const updatedUser = state.user
        ? { ...state.user, xp: newXP, total_xp: newXP, level: newLevel }
        : null

      localStorage.setItem('xp', String(newXP))
      localStorage.setItem('level', String(newLevel))
      if (updatedUser) localStorage.setItem('user', JSON.stringify(updatedUser))

      return {
        xp: newXP,
        level: newLevel,
        user: updatedUser
      }
    }),

  markChallengeSolved: (id) =>
    set((state) => {
      const updated = [...new Set([...state.solvedChallenges, String(id)])]
      const updatedUser = state.user
        ? { ...state.user, completed_challenges: updated.length }
        : null

      localStorage.setItem('solvedChallenges', JSON.stringify(updated))
      if (updatedUser) localStorage.setItem('user', JSON.stringify(updatedUser))

      return {
        solvedChallenges: updated,
        user: updatedUser
      }
    })
}))

export default useStore
