FROM node:18-alpine
WORKDIR /app

# Copia e instala
COPY . .
RUN npm install

# Construcción dentro del contenedor final
RUN npm run build

# Variables y ejecución
ENV PORT=80
EXPOSE 80
CMD ["npx", "remix-serve", "build/server/index.js"]
