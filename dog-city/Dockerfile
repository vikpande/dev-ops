FROM node:latest
COPY . .
RUN npm run build --production
RUN npm install -g serve
CMD serve -s -p 3000 build
EXPOSE 3000