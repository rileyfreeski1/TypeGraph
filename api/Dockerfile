FROM node:17

RUN apt-get update
RUN apt-get install -y curl

WORKDIR /usr/src/server

COPY modAlias.ts \
    package.json \
    gruntfile.typegraph.js \
    tsconfig.json ./

RUN npm install
RUN npm run build:typegraph

EXPOSE 4000

CMD ["npm", "run", "start:typegraph"]