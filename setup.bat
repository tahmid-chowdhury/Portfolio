@echo off
echo Installing root dependencies...
call npm install
echo.

echo Installing backend dependencies...
cd backend
call npm install
cd ..
echo.

echo Installing frontend dependencies...
cd frontend
call npm install
cd ..
echo.

echo Setup complete! You can now run the project with "npm run dev"