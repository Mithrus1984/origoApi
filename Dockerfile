FROM node:16-alpine3.14

RUN mkdir app

COPY dist/ app/

COPY package* app/

WORKDIR app

RUN touch .env

RUN npm install -f

EXPOSE 3000

CMD ["npm", "run", "start"]