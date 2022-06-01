

## BackEnd 

1. Docker Build
- sudo docker build -t << Domain >>/strong_yoit_back:${VER}
- docker buildx build --platform linux/arm/v7 -t << Domain >>/strong_yoit_back:${VER} --push

2. Stack Deploy 
 - VER=v_0.0.2 docker stack deploy -c /home/strong1133/docker/strong_yoit_back/docker_swarm.yml  strongserver

