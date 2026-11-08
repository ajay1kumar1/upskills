# Docker Deployment Guide

## Quick Start

### Prerequisites
- Docker Engine 20.10+
- Docker Compose 2.0+ (optional)

### Build and Run

```bash
# Build the Docker image
docker build -t upskills-in:latest .

# Run the container
docker run -d -p 3000:80 --name upskills-website upskills-in:latest

# Access the website at http://localhost:3000
```

### Using Docker Compose

```bash
# Start the services
docker-compose up -d

# Stop the services
docker-compose down

# View logs
docker-compose logs -f upskills-website

# Rebuild after changes
docker-compose up -d --build
```

## Production Deployment

### Environment Variables

Create a `.env` file in the project root:

```env
NODE_ENV=production
```

### Security Best Practices

1. **Run as non-root user**: The Dockerfile uses nginx which runs as nginx user
2. **Health checks**: Built-in health check endpoint at `/health`
3. **Security headers**: Configured in nginx.conf
4. **HTTPS**: Place behind a reverse proxy (Nginx, Traefik, Cloudflare) for SSL termination

### Production with Reverse Proxy

Example with Nginx as reverse proxy:

```nginx
server {
    listen 443 ssl http2;
    server_name upskills.in;

    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;

    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

## Docker Image Optimization

The Dockerfile uses multi-stage build:
1. **Builder stage**: Node.js 20-alpine to install dependencies and build
2. **Production stage**: Nginx alpine to serve static files

**Image size**: ~50MB

## CI/CD Integration

The GitHub Actions workflow automatically:
1. Builds the Docker image on push to main/develop
2. Runs health checks
3. Can push to Docker Hub (configure secrets)

## Troubleshooting

### Container won't start
```bash
docker logs upskills-website
```

### Port already in use
```bash
# Find process using port 3000
lsof -i :3000
# Kill it or use different port
docker run -p 3001:80 upskills-in:latest
```

### Build fails
```bash
# Clean cache
docker system prune -a
# Rebuild
docker build --no-cache -t upskills-in .
```

## Maintenance

```bash
# Update image
docker-compose pull
docker-compose up -d

# Backup data (none by default as it's static)
# Check disk usage
docker system df

# Clean up unused images
docker image prune -a
```
