call hugo
cp -r public/* flatSite/
call cd flatSite
call git remote add https://github.com/kutec/kutec.github.io.git
call git remote -v
call git add .
call git commit -m "'date()'"
call git push master origin