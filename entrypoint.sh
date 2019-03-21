#!/bin/sh -
set -o nounset # Treat unset variables as an error

sleep 10
#npm install
#npm run seed

# For some reason when docker builds this it downloads bindings for the host machine not the docker
# image. This step corrects that.
npm rebuild node-sass

npm start
