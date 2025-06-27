# Etapa 1: Construcción
FROM node:18 AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Etapa 2: Producción
FROM node:18-slim
WORKDIR /app
COPY --from=builder /app .
EXPOSE 80
ENV PORT=80
CMD ["npm", "run", "start"]


