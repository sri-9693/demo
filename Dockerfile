FROM node
RUN npm install -g express
COPY app.js /opt/app.js
EXPOSE 3000
ENTRYPOINT [ "node /opt/app.js" ]