docker exec -it node-app bash

#WINDOWS
docker run -d -it -p 3000:3000 -v %cd%:/app  --name node-app gilmartmd/node-app-image

docker run -d -it -p 3000:3000 -v $(pwd):/app  --name node-app gilmartmd/node-app-image