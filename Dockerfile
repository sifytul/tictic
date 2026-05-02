# Build stage
FROM node:22.12.0-alpine AS build

LABEL maintainer="tictic" \
      version="0.1.0" \
      description="Tictic web application"
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --production=false
COPY . .
RUN NODE_ENV=production yarn build
# Production stage
FROM nginx:1.27-alpine
COPY --from=build /app/dist /usr/share/nginx/html

# Run as non-root user
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chown -R nginx:nginx /var/cache/nginx && \
    chown -R nginx:nginx /var/log/nginx && \
    chown -R nginx:nginx /etc/nginx/conf.d && \
    touch /var/run/nginx.pid && \
    chown -R nginx:nginx /var/run/nginx.pid

USER nginx
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost/ || exit 1
CMD ["nginx", "-g", "daemon off;"]