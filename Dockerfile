FROM node:16-alpine

USER node

RUN mkdir -p /home/node/app

WORKDIR /home/node/app

COPY --chown=node:node . .

RUN npm install

RUN rm -rf dist && npx tsc -p tsconfig-build.json

RUN yarn run-migrations

ENV NODE_ENV=prod

CMD ["yarn", "start"]
