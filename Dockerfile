FROM node
RUN npm install express
ENTRYPOINT [ "node app.js" ]