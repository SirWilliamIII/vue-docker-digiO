FROM node:8.4.0

# Use changes to package.json to force Docker not to use cache
# when changing application dependencies

ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /usr/src/app && cp -a /tmp/node_modules /usr/src/app

# Load application's code making use of previous Docker layer if possible

WORKDIR /usr/src/app
ADD . /usr/src/app

RUN npm run build
RUN rm -rf ./build
RUN rm -rf ./src

ENV PORT=80

EXPOSE 80

# Run the app

CMD ["npm", "start"]


