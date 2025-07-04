# Hexora Platform

A modern Web3 collaboration platform built with Next.js, featuring multilingual support (Arabic/English) and beautiful light/dark themes.

## 🚀 Quick Start

### Development
```bash
npm install
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

## 🐳 Docker Deployment

### Option 1: Static Export (Recommended)
```bash
# Build the Docker image
npm run docker:build

# Run the container
npm run docker:run

# View logs
npm run docker:logs

# Stop the container
npm run docker:stop
```

### Option 2: Using Docker Compose
```bash
# Start the application
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the application
docker-compose down
```

### Option 3: Manual Docker Commands
```bash
# Build the image
docker build -t hexora-app:latest .

# Run the container
docker run -d -p 3000:3000 --name hexora-container hexora-app:latest

# Check container status
docker ps

# View application logs
docker logs hexora-container

# Stop and remove container
docker stop hexora-container
docker rm hexora-container
```

### Option 4: Standalone Next.js Server
If you prefer using Next.js server instead of static hosting:
```bash
# Use the standalone Dockerfile
docker build -f Dockerfile.standalone -t hexora-app:standalone .
docker run -d -p 3000:3000 --name hexora-standalone hexora-app:standalone
```

## 🌐 Access the Application

Once running, visit:
- **Local Development**: http://localhost:3000
- **Docker Container**: http://localhost:3000

## 📋 Docker Scripts

The project includes convenient scripts in the `scripts/` directory:

- `scripts/docker-build.sh` - Interactive build script
- `scripts/docker-run.sh` - Interactive run script

Make them executable:
```bash
chmod +x scripts/*.sh
./scripts/docker-build.sh
```

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for local development:
```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NODE_ENV=development
```

### Docker Environment
The Docker container uses production settings by default:
- `NODE_ENV=production`
- `NEXT_TELEMETRY_DISABLED=1`
- Port 3000 exposed

## 🏥 Health Checks

The Docker container includes health checks that verify the application is running correctly:
- Interval: 30 seconds
- Timeout: 3 seconds
- Retries: 3
- Start period: 5 seconds

## 🛡️ Security Features

- Non-root user in container
- Security headers configured
- Minimal attack surface
- Production optimizations

## 📊 Monitoring

View container status and logs:
```bash
# Container status
docker ps -f name=hexora-container

# Live logs
docker logs -f hexora-container

# Container stats
docker stats hexora-container
```

## 🔄 Updates

To update the application:
```bash
# Stop current container
npm run docker:stop

# Rebuild with latest changes
npm run docker:build

# Start new container
npm run docker:run
```

## 🌍 Features

- ✅ Multilingual support (English/Arabic)
- ✅ RTL layout for Arabic
- ✅ Light/Dark theme switching
- ✅ Responsive design
- ✅ Production-ready Docker setup
- ✅ Health checks and monitoring
- ✅ Security optimizations

## 📝 License

© 2025 Hexora. All rights reserved.