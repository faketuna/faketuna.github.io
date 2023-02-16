rd /Q /S docs
call npm run build
move D:\\myworks\\github\\website\\faketuna.github.io\\app\\build D:\\myworks\\github\\website\\faketuna.github.io\\app\\docs
git add . && git commit && git push origin development