@echo off
echo === InstaLanding AI Secret Purge Started ===

REM Clone your repo as a mirror (replace YOUR-USERNAME and REPO)
git clone --mirror https://github.com/billionaire-ships-it/InstaLanding-AI-Business.git
cd InstaLanding-AI-Business.git

REM Download BFG Repo-Cleaner JAR
curl -L -o bfg.jar https://repo1.maven.org/maven2/com/madgag/bfg/1.14.0/bfg-1.14.0.jar

REM Run BFG to scrub secrets
java -jar bfg.jar --replace-text ../secrets.txt

REM Clean and force push
git reflog expire --expire=now --all
git gc --prune=now --aggressive
git push --force

echo === Purge Complete. Empire Secure. ===
pause
