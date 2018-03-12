`docker images` lists all the images

`docker ps -a` lists all the containers

`docker pull image` pull the official image where image replaces the program you want to pull



`docker rm container_id` removes container

`docker rmi image_id` removes an image

`docker stop $(docker ps -aq)` stops all the running containers

`docker rm $(docker ps -aq)` removes all containers

`docker rmi $(docker images -q)` removes all images
`docker-compose run web any_command` runs the command and shutsdown
`docker-compose web bash` runs the bash script

