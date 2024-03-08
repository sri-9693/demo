FROM node
RUN npm install express
COPY app.js /opt
ENTRYPOINT [ "node /opt/app.js" ]