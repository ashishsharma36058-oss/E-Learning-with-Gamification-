import ProfileModal from "../components/ProfileModal"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import api from "../api/client"
import useStore from "../store/useStore"

export default function Dashboard() {
  const navigate = useNavigate()
  const { user, setUser } = useStore()

  const [stats, setStats] = useState({
    completed: 0,
    accuracy: 0,
  })

  const [loading, setLoading] = useState(true)
  const [openProfile, setOpenProfile] = useState(false)

  useEffect(() => {
    api
      .get("/progress/me")
      .then(({ data }) => {
        setStats(data)

        if (data.user) {
          setUser(data.user)
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  const cards = [
    {
      title: "Challenges Solved",
      value: stats.completed || 0,
      emoji: "🏆",
      color: "#8b5cf6",
    },
    {
      title: "Accuracy",
      value: `${stats.accuracy || 0}%`,
      emoji: "🎯",
      color: "#06b6d4",
    },
    {
      title: "Total XP",
      value: user?.total_xp || 0,
      emoji: "⚡",
      color: "#f59e0b",
    },
  ]

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to right, #0f172a, #111827, #1e293b)",
        color: "white",
        padding: "40px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          animation: "fadeIn 1s ease",
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            marginBottom: "10px",
            fontWeight: "bold",
          }}
        >
          🚀 Gamify Dashboard
        </h1>

        <p
          style={{
            color: "#94a3b8",
            marginBottom: "40px",
          }}
        >
          Welcome back {user?.username || "Coder"} 👋
          <button
  onClick={() => setOpenProfile(true)}
  style={{
    marginTop: "15px",
    padding: "10px 16px",
    borderRadius: 12,
    border: "none",
    background: "#7c3aed",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer"
  }}
>
  👤 Profile
</button>
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
  window.innerWidth < 768
    ? "1fr"
    : "repeat(auto-fit,minmax(250px,1fr))",
            gap: "25px",
          }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              style={{
                background: "#1e293b",
                borderRadius: "20px",
                padding: "30px",
                transition: "0.3s",
                border: `2px solid ${card.color}`,
                boxShadow: `0 0 20px ${card.color}33`,
              }}
            >
              <div
                style={{
                  fontSize: window.innerWidth < 768 ? "32px" : "45px",
                  marginBottom: "15px",
                }}
              >
                {card.emoji}
              </div>

              <h2
                style={{
                  fontSize: "18px",
                  color: "#cbd5e1",
                }}
              >
                {card.title}
              </h2>

              <h1
                style={{
                  fontSize: "38px",
                  marginTop: "10px",
                }}
              >
                {loading ? "..." : card.value}
              </h1>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "50px",
            background: "#111827",
            padding: window.innerWidth < 768 ? "20px" : "30px",
            borderRadius: "20px",
          }}
        >
          <h2
            style={{
              marginBottom: "20px",
              fontSize: "28px",
            }}
          >
            🎮 Quick Actions
          </h2>

          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={() => navigate("/play")}
              style={buttonStyle}
            >
              Play Game
            </button>

            <button
              onClick={() => navigate("/leaderboard")}
              style={buttonStyle}
            >
              Leaderboard
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        button:hover {
          transform: scale(1.05);
        }
      `}</style>
      <ProfileModal
  open={openProfile}
  onClose={() => setOpenProfile(false)}
/>
    </div>
  )
}

const buttonStyle = {
  padding: "15px 25px",
  border: "none",
  borderRadius: "12px",
  background: "#8b5cf6",
  color: "white",
  fontSize: "16px",
  cursor: "pointer",
  transition: "0.3s",
}
