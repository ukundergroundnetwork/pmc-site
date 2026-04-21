@echo off
cd /d %~dp0

echo ============================
echo Publishing to live site...
echo ============================

git add .

set /p msg=Enter commit message:

git commit -m "%msg%"

git push

echo ============================
echo Done! Your site is updating.
echo ============================

pause