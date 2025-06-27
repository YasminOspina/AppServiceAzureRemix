# Etapa 1: build
FROM node:18-alpine as builder
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
CMD ["npm", "run", "start"]

