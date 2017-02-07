FROM kkarczmarczyk/node-yarn:6.9-wheezy

RUN mkdir -p /opt/app && cd /opt/app
WORKDIR /opt/app

ADD package.json yarn.lock ./
RUN yarn

ADD ./src ./src

CMD npm start