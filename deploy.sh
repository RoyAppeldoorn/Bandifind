#!/usr/bin/env sh

# abort on errors
set -e

# build
npx vue-cli-service build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/RoyAppeldoorn/SM4.git master:gh-pages

cd -