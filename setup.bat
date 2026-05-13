@echo off
echo.
echo  ================================
echo    GAMIFY v2.0 - Setup Starting
echo  ================================
echo.

echo [1/4] Installing backend dependencies...
cd backend
pip install -r requirements.txt --quiet
echo Done.

echo [2/4] Running database migrations...
python -m alembic upgrade head
echo Done.

echo [3/4] Seeding challenges...
python -m app.seed_data
echo Done.

echo [4/4] Installing frontend dependencies...
cd ..\frontend
npm install --silent
echo Done.

cd ..
echo.
echo  ================================
echo    Setup Complete!
echo  ================================
echo.
echo  Run these in 2 terminals:
echo.
echo  Terminal 1 - Backend:
echo    cd gamify_pro\backend
echo    python -m uvicorn app.main:app --reload --port 8000
echo.
echo  Terminal 2 - Frontend:
echo    cd gamify_pro\frontend
echo    npm run dev
echo.
echo  Browser: http://127.0.0.1:5173
echo.
pause
