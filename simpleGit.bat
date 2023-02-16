@echo off

echo ****Deleting docs directory****
rd /Q /S docs
echo ****Building app****
call npm run build
echo ****Rename the build directory to docs directory****
move D:\\myworks\\github\\website\\faketuna.github.io\\app\\build D:\\myworks\\github\\website\\faketuna.github.io\\app\\docs
echo ****Git****
git add . && git commit && git push origin development