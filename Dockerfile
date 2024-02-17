FROM node:20-alpine3.18
WORKDIR /app
COPY package.json .

ARG NODE_ENV="development"
RUN if [ "$NODE_ENV" = "production" ]; \
        then npm install --prod; \
        else npm install; \
        fi
        
COPY . ./
ENV PORT 4000
EXPOSE ${PORT}
CMD [ "node" ,"index.js" ]

