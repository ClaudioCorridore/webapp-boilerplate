# Version: 0.0.2
FROM node:6.2.1
MAINTAINER Claudio Corridore <claudio.corridore@gmail.com>
ENV REFRESHED_AT 2016-06-06

RUN useradd --user-group --create-home --shell /bin/false app

ENV APP_NAME=xyz
ENV HOME=/home/app

COPY package.json /home/app/${APP_NAME}/

RUN chown -R app:app $HOME/*

USER app
WORKDIR $HOME/${APP_NAME}
RUN npm install && npm cache clean
ENTRYPOINT ["npm", "run"]
CMD ["start"]
