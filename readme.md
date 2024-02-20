>docker exec -it node-app sh

#WINDOWS
>docker run -d -it -p 3000:3000 -v %cd%:/app  --name node-app gilmartmd/node-app-image

>docker run -d -it -p 3000:3000 -v $(pwd):/app  --name node-app gilmartmd/node-app-image

#add another volume to avoid overriding node_modules on the previous volume binding

>docker run -d -it -p 3000:3000 -v $(pwd):/app:ro -v /app/node_modules --name node-app gilmartmd/node-app-image



#read only bind mount
-v path:contanerPath:ro


#Overriding environment
>docker run --env PORT=4000 -d -it -p 3000:4000 -v $(pwd):/app:ro -v /app/node_modules --name node-app gilmartmd/node-app-image

#Printing the environment variables inside bash or sh

> printenv
> env

#Loading .env file into docker run
>docker run --env-file ./.env -d -it -p 3000:4001 -v $(pwd):/app:ro -v /app/node_modules --name node-app gilmartmd/node-app-image

#Deletes the container and associated volumes
>docker container rm cid -fv  

#Build image and run the container using compose

>docker compose up --build -d

#PASS ARGUMENTS to docker build
>docker build --build-arg="NODE_ENV=production" -t gilmartmd/node-app-image  .

>docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build 

#starts a specific service from dockercompose file , without spanning the dependencies, in this case, mongo

>docker compose -f docker-compose.yml -f docker-compose.dev.yml up -d node-app --no-deps

#START MONGO
docker run -d \
  --name my-mongo-container \
  -e MONGO_INITDB_ROOT_USERNAME=gil \
  -e MONGO_INITDB_ROOT_PASSWORD=admin123 \
  -v mongo-db:/data/db \
  -p 27017:27017 \
  mongo

  #MANDATORY
  const app = express();
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


#using redis to auth using session

npm install connect-redis express-session


#RUN redis stack
docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack:latest

npm i redis

-V in compose forces renewal of anonymous volumes