FROM node:20-alpine3.18
WORKDIR /app
COPY package.json .
RUN npm install
COPY . ./
ENV PORT 4000
EXPOSE ${PORT}
CMD [ "node" ,"index.js" ]

