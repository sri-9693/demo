FROM node
RUN npm install -g express
COPY app.js /opt/app.js
EXPOSE 3000
CMD node /opt/app.js