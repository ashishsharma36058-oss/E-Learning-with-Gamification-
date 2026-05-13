import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div className="landing-page">
      <div className="animated-bg">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <section className="hero">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        
        <div className="hero-content">
          <p className="badge">⚡ Learn by Playing — Not by Watching</p>

          <h1>
            Level Up Your <span>Coding Skills</span> Through Games
          </h1>

          <p className="hero-text">
            Master programming through puzzles, boss fights, timed battles,
            XP rewards, streaks, and real progress tracking.
          </p>

          <div className="hero-buttons">
            <Link to="/register" className="primary-btn">
              Start for Free →
            </Link>
            <Link to="/login" className="secondary-btn">
              Sign In
            </Link>
          </div>

          <div className="stats">
            <div>
              <h3>4+</h3>
              <p>Languages</p>
            </div>
            <div>
              <h3>5</h3>
              <p>Game Modes</p>
            </div>
            <div>
              <h3>20</h3>
              <p>Levels</p>
            </div>
            <div>
              <h3>29+</h3>
              <p>Challenges</p>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Why Gamify?</h2>

        <div className="feature-grid">
          <div className="feature-card">🎮 Game Based Learning</div>
          <div className="feature-card">🏆 Leaderboard Ranking</div>
          <div className="feature-card">🔥 Daily Streaks</div>
          <div className="feature-card">⚡ XP & Level System</div>
        </div>
      </section>
    </div>
  )
}
