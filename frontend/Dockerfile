# Etapa 1: build
FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Etapa 2: producción
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app .
ENV PORT=80
EXPOSE 80
CMD ["npx", "remix-serve", "build/server/index.js"]
