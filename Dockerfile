FROM node
RUN npm install express
COPY app.js /opt
EXPOSE 3000
ENTRYPOINT [ "node /opt/app.js" ]