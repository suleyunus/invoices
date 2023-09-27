# Stage 1
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build --prod

# Stage 2
FROM nginx:alpine AS serve

COPY --from=builder /app/dist/invoices-app /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
