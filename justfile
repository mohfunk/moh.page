deploy repo:
    git init
    git add -A
    git commit -m "deploy"
    git remote add origin git@github.com:mohfunk/{{repo}}.git 
    git push -f git@github.com:mohfunk/{{repo}}.git master:gh-pages

