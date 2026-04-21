@echo off
cd /d %~dp0

echo ============================
echo Publishing to live site...
echo ============================

git add .

set /p msg=Enter commit message: 

git commit -m "%msg%"
if errorlevel 1 (
  echo.
  echo Commit did not complete.
  echo If Git said there was nothing to commit, that is OK only if you already saved everything.
)

git pull origin main --rebase
if errorlevel 1 (
  echo.
  echo Pull/rebase failed. Your site was NOT updated.
  pause
  exit /b 1
)

git push origin main
if errorlevel 1 (
  echo.
  echo Push failed. Your site was NOT updated.
  pause
  exit /b 1
)

echo.
echo ============================
echo Success! Your site is updating.
echo ============================

pause