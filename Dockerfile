FROM node:18-alpine
WORKDIR /nothing
COPY . .
RUN npm install
ENV NODE_ENV production
CMD ["nodemon", "server/server.js"]
ENV PORT 3002
EXPOSE 3002