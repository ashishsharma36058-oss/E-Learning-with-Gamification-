import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function BossFight() {
  const navigate = useNavigate()
  const [bossHp, setBossHp] = useState(100)
  const [msg, setMsg] = useState("J.A.R.V.I.S activated. Waiting for your code attack...")
  const [hit, setHit] = useState(false)

  const attackBoss = () => {
    if (bossHp <= 0) return

    const damage = Math.floor(Math.random() * 18) + 10
    const newHp = Math.max(bossHp - damage, 0)

    setHit(true)
    setTimeout(() => setHit(false), 500)

    setBossHp(newHp)

    if (newHp === 0) {
      setMsg("🏆 BOSS DEFEATED! +500 XP unlocked.")
    } else {
      setMsg(`⚡ Attack successful! You dealt ${damage}% damage.`)
    }
  }

  return (
    <>
      <style>{css}</style>

      <div className={`boss-page ${hit ? "shake" : ""}`}>
        <nav className="topbar">
          <div className="brand">🦊 GAMIFY <span>CODE. BATTLE. CONQUER.</span></div>
          <div className="navs">
            <button onClick={() => navigate("/dashboard")}>Dashboard</button>
            <button onClick={() => navigate("/play")}>Challenges</button>
            <button className="active">Boss Fight</button>
            <button>AI Mentor</button>
          </div>
          <div className="user">⚡ 2450 XP 💎 125 <span>AS</span></div>
        </nav>

        <main className="grid">
          <aside className="left">
            <section className="card profile">
              <h3>CODER PROFILE</h3>
              <div className="avatar">AS</div>
              <h2>Ashish</h2>
              <p className="red">ELITE CODER</p>
              <div className="level">23</div>
              <p>XP: 2,450 / 3,000</p>
              <p>🔥 Streak: 12 days</p>
              <p>🏆 Rank: Legendary</p>
            </section>

            <section className="card">
              <h3>BADGES</h3>
              <div className="badges">🏅 💎 🔥 👑</div>
            </section>

            <section className="card mentor">
              <h3>ALLY - AI MENTOR</h3>
              <div className="mentor-face">🤖</div>
              <b>NOVA</b>
              <p>Use inheritance wisely. Clean code is your secret weapon.</p>
            </section>
          </aside>

          <section className="center">
            <div className="hero card">
              <div>
                <div className="tag">BOSS FIGHT</div>
                <h2>AI OVERLORD</h2>
                <h1>J.A.R.V.I.S</h1>
                <p>
                  An advanced AI has taken control of the system. Defeat J.A.R.V.I.S
                  by solving the ultimate coding challenge.
                </p>

                <div className="dialog">
                  <b>J.A.R.V.I.S</b>
                  <p>Welcome back, Ashish. Let’s see if your code is strong enough.</p>
                </div>
              </div>

              <div className={`villain ${hit ? "hit" : ""}`}>
                <div className="eye l"></div>
                <div className="eye r"></div>
                <div className="core"></div>
                <div className="head">◉</div>
              </div>
            </div>

            <div className="mission card">
              🎯 <b>MISSION OBJECTIVE:</b> Use OOP concepts to bypass AI security and shut it down.
            </div>

            <div className="work">
              <section className="card challenge">
                <h3>CHALLENGE</h3>
                <p className="red">Problem</p>
                <p>Design a class <b>Hacker</b> that can attack the AI system.</p>
                <ul>
                  <li>Create a class Hacker</li>
                  <li>Add attack method</li>
                  <li>Create EliteHacker child class</li>
                  <li>Return final AI health</li>
                </ul>
                <h3 className="red">DIFFICULTY: LEGENDARY ✦✦✦✦✦</h3>
              </section>

              <section className="card editor">
                <h3>CODE EDITOR</h3>
                <pre>{`class Hacker:
    def __init__(self, name):
        self.name = name
        self.damage = 20

    def attack(self, ai):
        ai.health -= self.damage
        return ai.health

class EliteHacker(Hacker):
    def special_attack(self, ai):
        ai.health -= self.damage * 2
        return ai.health`}</pre>
                <button className="run">▶ RUN CODE</button>
              </section>
            </div>

            <section className="card progress">
              <h3>BATTLE PROGRESS</h3>
              <div className="steps">
                <span>🛡️ Scout</span>
                <span>⚔️ Mini Boss</span>
                <span>💠 Guardian</span>
                <span className="red">👾 J.A.R.V.I.S</span>
              </div>
            </section>
          </section>

          <aside className="right">
            <section className="card status">
              <h3>BOSS STATUS <span>● LIVE</span></h3>
              <div className={`boss-mask ${hit ? "hit" : ""}`}>◉</div>
              <h2>J.A.R.V.I.S</h2>
              <p>HP: {bossHp}%</p>
              <div className="hp"><div style={{ width: `${bossHp}%` }} /></div>

              <h4 className="red">ATTACK PATTERN</h4>
              <p>System overload, memory bugs, code injection.</p>

              <h4 className="blue">WEAKNESS</h4>
              <p>Clean Code + OOP + Optimization</p>
            </section>

            <section className="card output">
              <h3>OUTPUT</h3>
              <p>{msg}</p>
            </section>

            <section className="card rewards">
              <h3>REWARDS</h3>
              <p>💎 +500 XP</p>
              <p>🏅 Boss Badge</p>
              <p>🔥 Legendary Rank</p>
            </section>

            <button onClick={attackBoss} className="attack">
              ⚡ SUBMIT ATTACK
            </button>
          </aside>
        </main>
      </div>
    </>
  )
}

const css = `
.boss-page{
  min-height:100vh;
  background:
    radial-gradient(circle at 50% 20%,rgba(220,38,38,.35),transparent 35%),
    linear-gradient(135deg,#020617,#050008 45%,#120407);
  color:white;
  font-family:Arial, sans-serif;
  padding:0;
}
.topbar{
  height:64px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:0 22px;
  background:rgba(0,0,0,.65);
  border-bottom:1px solid rgba(239,68,68,.35);
}
.brand{
  color:#ef4444;
  font-weight:900;
  font-size:22px;
}
.brand span{
  display:block;
  font-size:10px;
  color:white;
}
.navs{
  display:flex;
  gap:20px;
}
.navs button{
  background:transparent;
  color:white;
  border:0;
  cursor:pointer;
  font-weight:700;
}
.navs .active{
  color:#ef4444;
  border-bottom:2px solid #ef4444;
}
.user span{
  margin-left:12px;
  background:#ef4444;
  padding:10px;
  border-radius:50%;
}
.grid{
  display:grid;
  grid-template-columns:260px 1fr 340px;
  gap:18px;
  padding:18px;
}
.card{
  background:rgba(3,7,18,.82);
  border:1px solid rgba(239,68,68,.45);
  border-radius:14px;
  padding:18px;
  box-shadow:0 0 25px rgba(239,68,68,.12);
}
.left,.right{
  display:grid;
  gap:14px;
  align-content:start;
}
.profile .avatar{
  width:82px;
  height:82px;
  border-radius:50%;
  background:linear-gradient(135deg,#ef4444,#f97316);
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:30px;
  font-weight:900;
}
.level{
  width:95px;
  height:95px;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  border:8px solid #ef4444;
  font-size:38px;
  font-weight:900;
}
.red{color:#ef4444}
.blue{color:#38bdf8}
.badges{font-size:32px}
.mentor-face{font-size:70px;filter:drop-shadow(0 0 20px #38bdf8)}
.center{display:grid;gap:14px}
.hero{
  min-height:390px;
  position:relative;
  overflow:hidden;
  display:grid;
  grid-template-columns:1fr 1fr;
}
.tag{
  border:1px solid #ef4444;
  color:#ef4444;
  display:inline-block;
  padding:8px 22px;
  border-radius:8px;
  font-weight:800;
}
.hero h1{
  font-size:70px;
  margin:5px 0;
  color:#ef4444;
  letter-spacing:10px;
  text-shadow:0 0 25px #ef4444;
}
.hero h2{font-size:26px;letter-spacing:3px}
.dialog{
  margin-top:25px;
  max-width:280px;
  border:1px solid #ef4444;
  background:rgba(127,29,29,.28);
  padding:16px;
  border-radius:10px;
}
.villain{
  position:relative;
  height:360px;
  display:flex;
  align-items:center;
  justify-content:center;
  animation:float 3s ease-in-out infinite;
}
.villain:before{
  content:"";
  position:absolute;
  width:260px;
  height:320px;
  border-radius:46% 46% 35% 35%;
  background:linear-gradient(160deg,#111827,#020617 45%,#7f1d1d);
  box-shadow:0 0 70px rgba(239,68,68,.7);
}
.head{
  position:absolute;
  top:60px;
  font-size:115px;
  color:#111827;
  text-shadow:0 0 35px #ef4444;
}
.eye{
  position:absolute;
  top:135px;
  width:22px;
  height:12px;
  background:red;
  border-radius:50%;
  box-shadow:0 0 22px red;
  z-index:5;
  animation:blink 1.4s infinite;
}
.eye.l{left:42%}
.eye.r{right:42%}
.core{
  position:absolute;
  bottom:80px;
  width:55px;
  height:55px;
  background:#ef4444;
  border-radius:50%;
  box-shadow:0 0 40px #ef4444;
  z-index:5;
}
.mission{font-size:16px}
.work{
  display:grid;
  grid-template-columns:1fr 1.45fr;
  gap:14px;
}
.editor pre{
  background:#020617;
  color:#22c55e;
  padding:18px;
  border-radius:12px;
  min-height:260px;
  overflow:auto;
}
.run,.attack{
  width:100%;
  padding:15px;
  border:0;
  border-radius:10px;
  background:linear-gradient(135deg,#991b1b,#ef4444);
  color:white;
  font-weight:900;
  cursor:pointer;
  box-shadow:0 0 25px rgba(239,68,68,.5);
}
.steps{
  display:flex;
  justify-content:space-around;
  gap:15px;
}
.status h3{
  display:flex;
  justify-content:space-between;
}
.status span{color:#ef4444}
.boss-mask{
  height:180px;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:110px;
  color:#111827;
  text-shadow:0 0 35px #ef4444;
  border-radius:14px;
  background:radial-gradient(circle,rgba(239,68,68,.25),transparent 65%);
}
.hp{
  height:13px;
  background:#1f2937;
  border-radius:999px;
  overflow:hidden;
}
.hp div{
  height:100%;
  background:linear-gradient(90deg,#ef4444,#f97316);
  transition:.35s;
}
.output{
  color:#22c55e;
}
.rewards{
  background:linear-gradient(135deg,rgba(88,28,135,.5),rgba(3,7,18,.9));
}
.attack{
  font-size:18px;
}
.hit{
  animation:hit .45s ease;
}
.shake{
  animation:shake .35s ease;
}
@keyframes float{
  0%,100%{transform:translateY(0)}
  50%{transform:translateY(-14px)}
}
@keyframes blink{
  0%,100%{opacity:.55}
  50%{opacity:1}
}
@keyframes hit{
  0%,100%{transform:translateX(0)}
  50%{transform:translateX(-12px) scale(1.04)}
}
@keyframes shake{
  0%,100%{transform:translateX(0)}
  25%{transform:translateX(-8px)}
  50%{transform:translateX(8px)}
  75%{transform:translateX(-5px)}
}
@media(max-width:1100px){
  .grid{grid-template-columns:1fr}
  .hero{grid-template-columns:1fr}
  .work{grid-template-columns:1fr}
  .navs{display:none}
}
`
