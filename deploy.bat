call hugo
cp -r public/* hosted
call cd hosted
call git remote -v
call git add .
call git commit -m "'date()'"
call git push