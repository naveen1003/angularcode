FROM ubuntu:latest
RUN apt-get -y update 
RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

ADD DevopsDashboardAngular.tar.gz /usr/src/app
WORKDIR /usr/src/app/DevopsDashboardAngular

RUN apt-get install -y build-essential
RUN apt-get -y install nodejs npm
RUN npm i -g npm
RUN npm install 
RUN npm install -g @angular/cli@6.0.8
RUN npm -v
RUN node -v


EXPOSE  4000
CMD ng serve --host 0.0.0.0 --port 4000 --disableHostCheck

