FROM node:16.0.0 as build-stage

ENV APP_HOME /sample-angular-universal
ENV APP_DIST /sample-angular-universal/dist
RUN mkdir -p $APP_HOME

WORKDIR $APP_HOME
COPY dist $APP_DIST

CMD ["node", "dist/server/main.js"]
