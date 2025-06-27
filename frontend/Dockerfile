FROM node:18-alpine
WORKDIR /app

COPY . .

RUN npm install
RUN chmod -R 755 .
RUN npm run build

ENV PORT=80
EXPOSE 80
CMD ["npx", "remix-serve", "build/server/index.js"]
