FROM ubuntu:16.04

ADD app /home/ubuntu/app
RUN apt-get update -y
RUN apt-get upgrade -y
RUN apt-get npm -y
RUN apt-get install nodejs -y
RUN npm install mongoose -y

CMD cd /home/ubuntu/app
CMD npm --prefix /home/ubuntu/app install /home/ubuntu/app
CMD nodejs /home/ubuntu/app/index.js
