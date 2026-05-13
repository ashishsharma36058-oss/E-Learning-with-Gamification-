# Gamify v2.0

**Learn programming through games — Code. Level Up. Win.**

## Quick Start

### Prerequisites
- Python 3.10+
- PostgreSQL (running, with `gamify` user and `gamify_db` database)
- Node.js 18+

### Setup
```bash
# Windows
setup.bat

# Manual
cd backend
pip install -r requirements.txt
python -m alembic upgrade head
python -m app.seed_data

cd ../frontend
npm install
```

### Run
```bash
# Terminal 1 - Backend
cd backend
python -m uvicorn app.main:app --reload --port 8000

# Terminal 2 - Frontend
cd frontend
npm run dev
```

Open: http://127.0.0.1:5173
API Docs: http://127.0.0.1:8000/api/docs

## Database Setup
```sql
CREATE USER gamify WITH PASSWORD 'gem';
CREATE DATABASE gamify_db OWNER gamify;
GRANT ALL PRIVILEGES ON DATABASE gamify_db TO gamify;
```

## Features
- 29+ challenges across Python, JavaScript, C++, Java
- 5 game modes: Puzzle, Battle, Quest, Debug, Boss
- Level 1-20 progression
- XP system with streak multipliers
- Global leaderboard
- Monaco editor (VS Code engine)
- JWT authentication with refresh tokens
- Account lockout after 5 failed attempts
- updated
