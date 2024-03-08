FROM node
COPY app.js /opt/app.js
EXPOSE 3000
WORKDIR /opt
RUN npm install express
CMD node app.js