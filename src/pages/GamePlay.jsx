import { useEffect, useState, useRef } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import Editor from '@monaco-editor/react'
import toast from 'react-hot-toast'
import api from '../api/client'
import useStore from '../store/useStore'
import LevelUpModal from '../components/LevelUpModal'

const MODE_ICONS = {
  puzzle: '🧩',
  battle: '⚔️',
  quest: '🗺️',
  debug: '🐛',
  boss: '👾'
}

const LANG_MAP = {
  python: 'python',
  javascript: 'javascript',
  cpp: 'cpp',
  java: 'java'
}

const getExpectedFromTitle = (challenge) => {
  const title = String(challenge?.title || '').toLowerCase()

  if (title.includes('hello world')) return 'Hello World'
  

  return ''
}

const buildSafeChallenge = (data = {}) => ({
  ...data,
  title: data.title || 'Challenge',
  description: data.description || 'Solve this challenge.',
  difficulty: data.difficulty || 'easy',
  language: data.language || 'python',
  game_mode: data.game_mode || 'puzzle',
  xp_reward: data.xp_reward || data.xp || 100,
  starter_code: data.starter_code || data.starterCode || '',
  solution:
    data.solution ||
    data.correct_code ||
    data.correctCode ||
    data.answer_code ||
    '',
  expected_output:
    data.expected_output ||
    data.expectedOutput ||
    data.output ||
    data.answer ||
    data.expected ||
    getExpectedFromTitle(data),
  test_cases: data.test_cases || data.testCases || [],
  hints: data.hints || [],
  time_limit: data.time_limit || data.timeLimit || 120
})

export default function GamePlay() {
  const { id } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const { addXP, markChallengeSolved } = useStore()

  const [ch, setCh] = useState(null)
  const [code, setCode] = useState('')
  const [timeLeft, setTimeLeft] = useState(120)
  const [hintsUsed, setHintsUsed] = useState(0)
  const [submitting, setSubmitting] = useState(false)
  const [result, setResult] = useState(null)
  const [aiHint, setAiHint] = useState('')
  const [levelUp, setLevelUp] = useState(null)
  const [xpFloat, setXpFloat] = useState(null)
  const [tab, setTab] = useState('problem')

  const startTime = useRef(Date.now())
  const timerRef = useRef(null)

  const runCodeOutput = (sourceCode = '') => {
  try {
    const vars = {}
    const lines = sourceCode.split('\n')
    const outputs = []

    const cleanValue = (value) => {
      const v = String(value).trim().replace(/;$/, '')

      if (
        (v.startsWith('"') && v.endsWith('"')) ||
        (v.startsWith("'") && v.endsWith("'"))
      ) {
        return v.slice(1, -1)
      }

      if (!Number.isNaN(Number(v))) return Number(v)

      return v
    }

    const evalExpr = (exprRaw) => {
      let expr = String(exprRaw).trim().replace(/;$/, '')

      if (!expr) return ''

      if (
        (expr.startsWith('"') && expr.endsWith('"')) ||
        (expr.startsWith("'") && expr.endsWith("'"))
      ) {
        return expr.slice(1, -1)
      }

      Object.keys(vars)
        .sort((a, b) => b.length - a.length)
        .forEach((v) => {
          const value = typeof vars[v] === 'string' ? `"${vars[v]}"` : vars[v]
          expr = expr.replace(new RegExp(`\\b${v}\\b`, 'g'), value)
        })

      return String(eval(expr))
    }

    lines.forEach((rawLine) => {
      const line = rawLine.trim()

      if (
        !line ||
        line.startsWith('#') ||
        line.startsWith('//') ||
        line === '{' ||
        line === '}'
      ) {
        return
      }

      const varMatch =
        line.match(/^(?:let|const|var|int|double|float|String|string)?\s*([a-zA-Z_]\w*)\s*=\s*(.+);?$/)

      if (varMatch && !line.includes('print') && !line.includes('cout') && !line.includes('System.out')) {
        vars[varMatch[1]] = cleanValue(varMatch[2])
      }

      const printMatch =
        line.match(/^print\((.*?)\)$/s) ||
        line.match(/^console\.log\((.*?)\);?$/s) ||
        line.match(/^System\.out\.println\((.*?)\);?$/s) ||
        line.match(/^cout\s*<<\s*(.*?)\s*;?$/s)

      if (printMatch) {
        let expr = printMatch[1]

        if (line.includes('cout')) {
          expr = expr
            .replace(/<<\s*endl/g, '')
            .replace(/endl/g, '')
            .trim()
        }

        outputs.push(evalExpr(expr))
      }
    })

    if (outputs.length === 0) return 'No print statement found'

    return outputs.join('\n').trim()
  } catch {
    return 'Output error'
  }
}

  const getOutput = () => runCodeOutput(code)

  const speakPraise = () => {
    const praise = 'Excellent work! Tumne challenge complete kar liya. Keep going, future coder!'

    toast.success(praise)

    if (!window.speechSynthesis) return

    window.speechSynthesis.cancel()

    const speech = new SpeechSynthesisUtterance(praise)
    speech.lang = 'en-IN'
    speech.rate = 0.9
    speech.pitch = 1.3
    speech.volume = 1

    const voices = window.speechSynthesis.getVoices()

    const indianVoice =
      voices.find((v) => v.lang.includes('en-IN') && v.name.toLowerCase().includes('female')) ||
      voices.find((v) => v.lang.includes('hi-IN')) ||
      voices.find((v) => v.name.toLowerCase().includes('zira')) ||
      voices.find((v) => v.name.toLowerCase().includes('google'))

    if (indianVoice) speech.voice = indianVoice

    setTimeout(() => {
      window.speechSynthesis.speak(speech)
    }, 800)
  }

  useEffect(() => {
    const savedChallenge = JSON.parse(localStorage.getItem('current_challenge') || 'null')
    const demoChallenge = location.state?.challenge || savedChallenge

    if (demoChallenge) {
      const safeChallenge = buildSafeChallenge(demoChallenge)

      setCh(safeChallenge)
      setCode(safeChallenge.starter_code)
      setTimeLeft(safeChallenge.time_limit)
      setResult(null)
      startTime.current = Date.now()
      return
    }

    api
      .get(`/challenges/${id}`)
      .then((r) => {
        const data = r.data || {}
        const safeChallenge = buildSafeChallenge(data)

        setCh(safeChallenge)
        setCode(safeChallenge.starter_code)
        setTimeLeft(safeChallenge.time_limit)
        setResult(null)
        startTime.current = Date.now()
      })
      .catch(() => {
        toast.error('Challenge load nahi hua')
        navigate('/play')
      })
  }, [id, location.state, navigate])

  useEffect(() => {
    if (!ch) return

    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timerRef.current)
          toast.error("Time's up!")
          return 0
        }

        return t - 1
      })
    }, 1000)

    return () => clearInterval(timerRef.current)
  }, [ch])

  const fmt = (s) => {
    const safe = Number(s || 0)
    return `${Math.floor(safe / 60)}:${String(safe % 60).padStart(2, '0')}`
  }

  const timerClass =
    timeLeft < 60 ? 'timer danger' : timeLeft < 120 ? 'timer warning' : 'timer normal'

  const showHint = () => {
    const hints = ch?.hints || []
    if (!ch || hintsUsed >= hints.length) return

    toast(`💡 Hint: ${hints[hintsUsed]}`)
    setHintsUsed((h) => h + 1)
  }

  const generateHint = () => {
    const hints = {
      variables: 'Hint: Variable data store karta hai.',
      loop: 'Hint: Loop repeated task ke liye use hota hai.',
      function: 'Hint: Function reusable code block hota hai.',
      list: 'Hint: List multiple values store karta hai.',
      string: 'Hint: String text data hota hai.',
      ifelse: 'Hint: if-else decision making ke liye use hota hai.',
      recursion: 'Hint: Function khud ko call karta hai.',
      class: 'Hint: Class object banane ka blueprint hota hai.',
      dictionary: 'Hint: Dictionary key-value pair store karta hai.'
    }

    const text = ch?.title?.toLowerCase() || ''

    for (const key in hints) {
      if (text.includes(key)) {
        setAiHint(hints[key])
        return
      }
    }

    setAiHint('Hint: Problem ko step by step solve karo.')
  }

  const checkLocalAnswer = () => {
  const userOut = String(runCodeOutput(code)).trim()
  const title = String(ch?.title || '').toLowerCase()

  let expectedOut = String(ch?.expected_output || '').trim()

  if (title.includes('sum two numbers')) {
    const aMatch = code.match(/\ba\s*=\s*(-?\d+)/)
    const bMatch = code.match(/\bb\s*=\s*(-?\d+)/)

    if (aMatch && bMatch) {
      expectedOut = String(Number(aMatch[1]) + Number(bMatch[1]))
    }
  }

  if (!expectedOut && ch?.solution) {
    expectedOut = String(runCodeOutput(ch.solution)).trim()
  }

  const invalidOutputs = [
    'Output error',
    'No print statement found',
    'undefined',
    ''
  ]

  const correct =
    expectedOut !== '' &&
    !invalidOutputs.includes(userOut) &&
    !invalidOutputs.includes(expectedOut) &&
    userOut === expectedOut

  return { correct, userOut, expectedOut }
}

  const completeChallenge = (xp, message) => {
    setResult({
      passed: true,
      message,
      xp_earned: xp
    })

    setXpFloat(`+${xp} XP`)
    setTimeout(() => setXpFloat(null), 2500)

    addXP(xp)
    markChallengeSolved(ch.id || id)
    speakPraise()
  }

  const submit = async () => {
    if (!ch || submitting || timeLeft === 0) return

    setSubmitting(true)
    clearInterval(timerRef.current)

    try {
      const local = checkLocalAnswer()

      if (!local.correct) {
        setResult({
          passed: false,
          message: `Wrong Output ❌ Expected: ${local.expectedOut || 'challenge answer'}, Got: ${local.userOut || 'No Output'}`,
          xp_earned: 0
        })

        toast.error('Wrong Output ❌')
        return
      }

      completeChallenge(ch.xp_reward, local.userOut)
    } finally {
      setSubmitting(false)
    }
  }

  if (!ch) {
    return (
      <div
        style={{
          height: 'calc(100vh - 60px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--text-3)',
          background: 'var(--bg-0)',
          fontFamily: 'var(--mono)'
        }}
      >
        Loading challenge...
      </div>
    )
  }

  const hints = ch.hints || []

  return (
    <div
      style={{
        height: 'calc(100vh - 60px)',
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--bg-0)'
      }}
    >
      <div
        style={{
          background: 'var(--bg-1)',
          borderBottom: '1px solid var(--border)',
          padding: '10px 20px',
          display: 'flex',
          alignItems: 'center',
          gap: 14,
          flexShrink: 0
        }}
      >
        <button className="btn btn-secondary btn-sm" onClick={() => navigate('/play')}>
          ← Back
        </button>

        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 15, fontWeight: 700 }}>{ch.title}</span>
            <span className={`pill pill-${ch.difficulty}`}>{ch.difficulty}</span>
            <span className="mode-badge">
              {MODE_ICONS[ch.game_mode] || '🎮'} {ch.game_mode}
            </span>
          </div>

          <div
            style={{
              fontSize: 11,
              color: 'var(--text-3)',
              fontFamily: 'var(--mono)',
              marginTop: 2
            }}
          >
            {ch.language} · +{ch.xp_reward} XP reward
          </div>
        </div>

        <div className={timerClass}>{fmt(timeLeft)}</div>

        <button
          className="btn btn-secondary btn-sm"
          onClick={showHint}
          disabled={hintsUsed >= hints.length}
        >
          💡 Hint ({hints.length - hintsUsed})
        </button>

        <button
          className="btn btn-primary"
          style={{ padding: '9px 22px', fontSize: 13 }}
          onClick={submit}
          disabled={submitting || timeLeft === 0}
        >
          {submitting ? 'Running...' : '▶ Submit'}
        </button>

        <button
          onClick={generateHint}
          style={{
            padding: '9px 16px',
            borderRadius: 10,
            border: 'none',
            background: '#ff9800',
            color: 'white',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          🤖 AI Hint
        </button>
      </div>

      <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
        <div
          style={{
            width: 360,
            flexShrink: 0,
            background: 'var(--bg-1)',
            borderRight: '1px solid var(--border)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden'
          }}
        >
          <div style={{ display: 'flex', borderBottom: '1px solid var(--border)', padding: '0 16px' }}>
            {['problem', 'hints'].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                style={{
                  padding: '12px 14px',
                  fontSize: 12,
                  fontWeight: 600,
                  cursor: 'pointer',
                  background: 'none',
                  border: 'none',
                  textTransform: 'capitalize',
                  color: tab === t ? 'var(--purple-light)' : 'var(--text-3)',
                  borderBottom: `2px solid ${tab === t ? 'var(--purple)' : 'transparent'}`
                }}
              >
                {t}
              </button>
            ))}
          </div>

          <div style={{ flex: 1, overflowY: 'auto', padding: 20 }}>
            {tab === 'problem' && (
              <>
                <h3 style={{ fontSize: 16, marginBottom: 12 }}>{ch.title}</h3>

                <p
                  style={{
                    fontSize: 13,
                    color: 'var(--text-2)',
                    lineHeight: 1.75,
                    marginBottom: 20
                  }}
                >
                  {ch.description}
                </p>

                {aiHint && (
                  <div
                    style={{
                      background: 'rgba(245,158,11,0.08)',
                      border: '1px solid rgba(245,158,11,0.25)',
                      borderRadius: 10,
                      padding: 12,
                      color: 'var(--amber)',
                      fontSize: 12,
                      marginBottom: 14,
                      lineHeight: 1.6
                    }}
                  >
                    🤖 {aiHint}
                  </div>
                )}

                {result && (
                  <div
                    style={{
                      background: result.passed ? 'rgba(16,185,129,0.08)' : 'rgba(239,68,68,0.08)',
                      border: `1px solid ${
                        result.passed ? 'rgba(16,185,129,0.3)' : 'rgba(239,68,68,0.3)'
                      }`,
                      borderRadius: 10,
                      padding: 16
                    }}
                  >
                    <div
                      style={{
                        fontWeight: 700,
                        color: result.passed ? 'var(--green)' : 'var(--red)',
                        marginBottom: 8,
                        fontSize: 14
                      }}
                    >
                      {result.passed ? '✅ Challenge Completed!' : '❌ Try Again'}
                    </div>

                    {!result.passed && (
                      <div
                        style={{
                          fontSize: 12,
                          color: 'var(--red)',
                          lineHeight: 1.6,
                          marginBottom: 12
                        }}
                      >
                        {result.message}
                      </div>
                    )}

                    <div
                      style={{
                        marginTop: 16,
                        background: '#111',
                        border: '1px solid #333',
                        borderRadius: 10,
                        padding: 12,
                        color: '#00ff99',
                        fontFamily: 'monospace',
                        minHeight: 80
                      }}
                    >
                      <div style={{ color: 'white', marginBottom: 8 }}>Output</div>
                      <pre>{getOutput()}</pre>
                    </div>

                    {result.passed && (
                      <>
                        <div
                          style={{
                            fontSize: 14,
                            color: 'var(--orange)',
                            fontWeight: 700,
                            fontFamily: 'var(--mono)',
                            marginTop: 12
                          }}
                        >
                          +{result.xp_earned} XP earned
                        </div>

                        <button
                          className="btn btn-secondary btn-sm"
                          style={{ marginTop: 14, width: '100%' }}
                          onClick={() => navigate('/play')}
                        >
                          Back to Challenges
                        </button>
                      </>
                    )}
                  </div>
                )}
              </>
            )}

            {tab === 'hints' && (
              <div>
                <p style={{ fontSize: 13, color: 'var(--text-3)', marginBottom: 16 }}>
                  Each hint helps you solve the challenge.
                </p>

                {hintsUsed === 0 ? (
                  <button className="btn btn-secondary" style={{ width: '100%' }} onClick={showHint}>
                    Reveal Hint 1
                  </button>
                ) : (
                  hints.slice(0, hintsUsed).map((h, i) => (
                    <div
                      key={i}
                      style={{
                        background: 'rgba(245,158,11,0.07)',
                        border: '1px solid rgba(245,158,11,0.2)',
                        borderRadius: 8,
                        padding: '10px 14px',
                        marginBottom: 10,
                        fontSize: 12,
                        color: 'var(--amber)',
                        lineHeight: 1.65
                      }}
                    >
                      💡 Hint {i + 1}: {h}
                    </div>
                  ))
                )}

                {hintsUsed > 0 && hintsUsed < hints.length && (
                  <button
                    className="btn btn-secondary btn-sm"
                    style={{ marginTop: 8, width: '100%' }}
                    onClick={showHint}
                  >
                    Reveal Hint {hintsUsed + 1}
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        <div style={{ flex: 1, position: 'relative' }}>
          <Editor
            height="100%"
            language={LANG_MAP[ch.language] || 'javascript'}
            value={code}
            onChange={(val) => setCode(val || '')}
            theme="vs-dark"
            options={{
              fontSize: 14,
              fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
              minimap: { enabled: false },
              scrollBeyondLastLine: false,
              lineNumbers: 'on',
              renderLineHighlight: 'all',
              cursorBlinking: 'smooth',
              padding: { top: 20, bottom: 20 },
              tabSize: 4,
              wordWrap: 'on',
              bracketPairColorization: { enabled: true }
            }}
          />

          {xpFloat && (
            <div
              style={{
                position: 'absolute',
                top: 20,
                right: 20,
                background: 'var(--orange)',
                color: '#fff',
                fontWeight: 800,
                fontSize: 20,
                padding: '10px 20px',
                borderRadius: 12,
                fontFamily: 'var(--mono)',
                pointerEvents: 'none'
              }}
            >
              {xpFloat}
            </div>
          )}
        </div>
      </div>

      {levelUp && (
        <LevelUpModal
          newLevel={levelUp}
          onClose={() => {
            setLevelUp(null)
            navigate('/dashboard')
          }}
        />
      )}
    </div>
  )
}
