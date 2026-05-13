import { useState, useEffect } from "react"
import useStore from "../store/useStore"

export default function ProfileModal({ open, onClose }) {
  const { user, setUser } = useStore()

  const [editMode, setEditMode] = useState(false)
  const [form, setForm] = useState({
    username: "",
    email: "",
  })

  useEffect(() => {
    if (user) {
      setForm({
        username: user.username || "",
        email: user.email || "",
      })
    }
  }, [user])

  const saveProfile = () => {
    setUser({
      ...user,
      username: form.username,
      email: form.email,
    })

    setEditMode(false)
  }

  const logout = () => {
    localStorage.removeItem("g_access")
    localStorage.removeItem("g_refresh")
    localStorage.removeItem("saved_username")
    localStorage.removeItem("saved_password")

    window.location.href = "/login"
  }

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: open ? "rgba(0,0,0,0.55)" : "rgba(0,0,0,0)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "0.3s ease",
          zIndex: 9998,
          backdropFilter: "blur(4px)",
        }}
      />

      {/* Sidebar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          height: "100vh",
          width: "360px",
          maxWidth: "90vw",
          background: "#111827",
          color: "white",
          zIndex: 9999,
          padding: "28px",
          borderLeft: "1px solid #7c3aed",
          boxShadow: "-10px 0 40px rgba(124,58,237,0.35)",
          transform: open ? "translateX(0)" : "translateX(110%)",
          transition: "transform 0.35s ease",
          overflowY: "auto",
        }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          style={{
            float: "right",
            background: "transparent",
            border: "none",
            color: "white",
            fontSize: 24,
            cursor: "pointer",
          }}
        >
          ×
        </button>

        {/* Profile */}
        <div style={{ textAlign: "center", marginTop: 35 }}>
          <div
            style={{
              width: 90,
              height: 90,
              borderRadius: "50%",
              background: "linear-gradient(135deg,#8b5cf6,#ec4899)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 36,
              fontWeight: "bold",
              margin: "0 auto 18px",
            }}
          >
            {form.username?.[0]?.toUpperCase() || "U"}
          </div>

          {editMode ? (
            <div style={{ display: "grid", gap: 12 }}>
              <input
                value={form.username}
                onChange={(e) =>
                  setForm({ ...form, username: e.target.value })
                }
                placeholder="Username"
                style={inputStyle}
              />

              <input
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                placeholder="Email"
                style={inputStyle}
              />
            </div>
          ) : (
            <>
              <h2>{user?.username || "User"}</h2>

              <p style={{ color: "#9ca3af" }}>
                {user?.email || "No email"}
              </p>
            </>
          )}
        </div>

        {/* Stats */}
        <div style={{ marginTop: 28, display: "grid", gap: 14 }}>
          <div style={boxStyle}>
            <h3>⚡ XP</h3>
            <p>{user?.xp || user?.total_xp || 0}</p>
          </div>

          <div style={boxStyle}>
            <h3>🏆 Level</h3>
            <p>{user?.level || 1}</p>
          </div>

          <div style={boxStyle}>
            <h3>🎯 Rank</h3>
            <p>Beginner Coder</p>
          </div>
        </div>

        {/* Edit Button */}
        <button
          onClick={editMode ? saveProfile : () => setEditMode(true)}
          style={{
            marginTop: 28,
            width: "100%",
            padding: "14px",
            borderRadius: 14,
            border: "none",
            background: editMode ? "#10b981" : "#f59e0b",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          {editMode ? "Save Profile" : "✏️ Edit Profile"}
        </button>

        {/* Logout Button */}
        <button
          onClick={logout}
          style={{
            marginTop: 12,
            width: "100%",
            padding: "14px",
            borderRadius: 14,
            border: "none",
            background: "#ef4444",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Logout
        </button>

        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            marginTop: 12,
            width: "100%",
            padding: "14px",
            borderRadius: 14,
            border: "none",
            background: "#7c3aed",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Close
        </button>
      </div>
    </>
  )
}

const boxStyle = {
  background: "#1f2937",
  padding: 16,
  borderRadius: 14,
  border: "1px solid rgba(124,58,237,0.25)",
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  borderRadius: 12,
  border: "1px solid rgba(124,58,237,0.4)",
  background: "#0f172a",
  color: "white",
  outline: "none",
}
