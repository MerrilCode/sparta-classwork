FROM ubuntu:16.04

ADD app /home/ubuntu/app
RUN apt-get update -y
RUN apt-get upgrade -y
RUN apt-get install npm -y 
RUN apt-get install nodejs -y
RUN npm install mongoose -y

WORKDIR /home/ubuntu/app
CMD npm install 
CMD nodejs app.js