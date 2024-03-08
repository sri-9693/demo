FROM node
RUN npm install -g express
COPY app.js /opt
EXPOSE 3000
ENTRYPOINT [ "node /opt/app.js" ]