#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# copy README.md
cp README.md dist/

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:pablosirera/pablosirera.github.io.git master

cd -
