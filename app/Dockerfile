# Build stage
FROM node:22.12-alpine AS build
WORKDIR /app
COPY package.json yarn.lock ./
# Use --frozen-lockfile for consistent, secure builds
RUN yarn install --frozen-lockfile
COPY . .
RUN NODE_ENV=production yarn build

# Production stage
FROM nginx:1.27-alpine
# Update OS packages to patch known CVEs
RUN apk upgrade --no-cache

COPY --from=build /app/dist /usr/share/nginx/html

# Permissions (Optimized)
RUN chown -R nginx:nginx /usr/share/nginx/html /var/cache/nginx /var/log/nginx /etc/nginx/conf.d && \
    touch /var/run/nginx.pid && \
    chown nginx:nginx /var/run/nginx.pid

USER nginx
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost/ || exit 1
CMD ["nginx", "-g", "daemon off;"]
