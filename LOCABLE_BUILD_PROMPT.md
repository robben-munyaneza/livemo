# Frontend Build Request - Livestock Health Monitor

**Project:** Livestock Health Monitor  
**Repository:** /Users/Remy/WORKSPACE/KEYNUS/livestock-health-monitor  
**Request Type:** Frontend Build & Deployment  
**Priority:** High

## 🐄 Project Overview

This is a comprehensive livestock health monitoring system designed for pasture owners to manage multiple animal types using sensor technology and System Integration (SI).

### Supported Animals
- **Cows** 🐄
- **Goats** 🐐  
- **Chicken** 🐔
- **Pigs** 🐷
- **Additional livestock** (sheep, horses, etc.)

### Key Features
- **Real-time health monitoring** via IoT sensors
- **Pasture management** for livestock owners
- **Sensor technology integration** for health tracking
- **System Integration (SI)** for comprehensive management
- **Multi-animal type support** with species-specific monitoring

### Monitoring Capabilities
- **Health Metrics**: Temperature, heart rate, activity levels
- **Location Tracking**: GPS-based pasture monitoring
- **Feed Management**: Automated feeding schedules and monitoring
- **Vaccination Tracking**: Immunization schedules and records
- **Breeding Management**: Reproduction cycles and breeding records
- **Weight Monitoring**: Growth tracking and weight management
- **Disease Detection**: Early warning systems for illness
- **Environmental Monitoring**: Weather conditions and pasture quality

### Technology Stack
- **IoT Sensors**: Wearable devices for each animal
- **Data Analytics**: Real-time processing of sensor data
- **Mobile App**: For on-the-go monitoring
- **Web Dashboard**: Comprehensive management interface
- **Alert System**: SMS/email notifications for health issues

---

## 📋 Build Instructions

### 1. Navigate to Project Directory
```bash
cd /Users/Remy/WORKSPACE/KEYNUS/livestock-health-monitor
```

### 2. Identify Frontend Technology
First, determine what frontend framework is being used:
- Check for `package.json` (React/Vue/Angular)
- Look for `angular.json` (Angular)
- Check for `vite.config.js` or `vue.config.js` (Vue)
- Look for `next.config.js` (Next.js)
- Check for `gatsby-config.js` (Gatsby)

### 3. Install Dependencies
```bash
# If package.json exists
npm install
# or
yarn install

# If using Angular
npm install -g @angular/cli (if needed)
npm install

# If using Vue with specific version
npm install
```

### 4. Build for Production
```bash
# React/Vue (standard)
npm run build

# React/Vue (Vite)
npm run build

# Angular
ng build --prod

# Next.js
npm run build

# Gatsby
npm run build

# Custom build command (check package.json scripts)
npm run build:prod
npm run build:production
```

### 5. Verify Build Output
Check for build artifacts:
- `dist/` folder (React/Vue)
- `build/` folder (Create React App)
- `dist/livestock-health-monitor/` (Angular)
- `.next/` folder (Next.js)
- `public/` folder (Gatsby)

### 6. Optimize Build (Optional)
```bash
# Analyze bundle size (React/Vue)
npm run analyze

# Generate build report
npm run build:report
```

---

## 🚀 Deployment Instructions

### Option 1: Local Build
```bash
# Build locally
cd /Users/Remy/WORKSPACE/KEYNUS/livestock-health-monitor
npm run build

# Verify build artifacts
ls -la dist/ # or build/
```

### Option 2: Docker Build (if Dockerfile exists)
```bash
# Build Docker image
docker build -t livestock-health-monitor .

# Run container
docker run -p 3000:3000 livestock-health-monitor
```

### Option 3: CI/CD Pipeline
If the project has GitHub Actions or similar CI/CD:
```bash
# Trigger build pipeline
git push origin main
# or
git push origin develop
```

---

## 🔍 Troubleshooting

### Common Issues & Solutions

#### 1. Node Version Mismatch
```bash
# Check required Node version
cat package.json | grep engines

# Use correct Node version (nvm)
nvm use 18
nvm use 16
nvm use 20
```

#### 2. Dependency Installation Issues
```bash
# Clear cache
npm cache clean --force

# Remove node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### 3. Build Memory Issues
```bash
# Increase Node memory limit
export NODE_OPTIONS="--max-old-space-size=4096"
npm run build
```

#### 4. TypeScript Errors
```bash
# Check TypeScript configuration
npx tsc --noEmit

# Fix TypeScript issues before building
npm run type-check
```

#### 5. Environment Variables
```bash
# Check for .env.example
cp .env.example .env

# Set required environment variables for livestock monitoring
echo "NODE_ENV=production" >> .env
echo "API_URL=https://api.livestock-health-monitor.com" >> .env
echo "IOT_API_URL=https://iot.livestock-health-monitor.com" >> .env
echo "SENSOR_API_KEY=your_sensor_api_key_here" >> .env
echo "GPS_API_KEY=your_gps_api_key_here" >> .env
echo "WEATHER_API_KEY=your_weather_api_key_here" >> .env
echo "SMS_API_KEY=your_sms_api_key_here" >> .env
echo "EMAIL_SERVICE_URL=https://email.livestock-health-monitor.com" >> .env
echo "REAL_TIME_WS_URL=wss://ws.livestock-health-monitor.com" >> .env
echo "MAP_API_KEY=your_map_api_key_here" >> .env
echo "ALERT_THRESHOLD_TEMPERATURE=40.5" >> .env
echo "ALERT_THRESHOLD_HEART_RATE=120" >> .env
```

---

## 📁 Expected Project Structure

```
livestock-health-monitor/
├── package.json
├── src/
│   ├── components/
│   │   ├── AnimalCard/
│   │   ├── SensorData/
│   │   ├── HealthAlert/
│   │   ├── PastureMap/
│   │   └── Dashboard/
│   ├── pages/
│   │   ├── Dashboard/
│   │   ├── Animals/
│   │   ├── Sensors/
│   │   ├── Pastures/
│   │   └── Settings/
│   ├── services/
│   │   ├── api.js
│   │   ├── websocket.js
│   │   ├── sensors.js
│   │   └── alerts.js
│   ├── utils/
│   │   ├── constants.js
│   │   ├── helpers.js
│   │   └── animalTypes.js
│   ├── App.js/App.vue
│   └── main.js/main.ts
├── public/
│   ├── icons/
│   │   ├── cow.svg
│   │   ├── goat.svg
│   │   ├── chicken.svg
│   │   └── pig.svg
│   └── images/
├── node_modules/
├── dist/ (after build)
├── .env.example
└── README.md
```

---

## 🎯 Build Requirements

### Minimum Requirements
- Node.js 16+ (check package.json)
- npm 7+ or yarn 1.22+
- 4GB RAM minimum
- 10GB disk space

### Recommended
- Node.js 18 LTS
- npm 8+
- 8GB RAM
- SSD storage

---

## 📊 Build Verification

### After Build, Verify:
1. **Build Artifacts Created**
   ```bash
   ls -la dist/  # or build/
   ```

2. **Main Files Present**
   - `index.html`
   - JavaScript bundles (.js files)
   - CSS files (.css files)
   - Assets (images, fonts)

3. **File Sizes Reasonable**
   - Main bundle < 5MB (ideally < 2MB)
   - Total build < 50MB (ideally < 20MB)

4. **No Build Errors**
   - Check terminal output for errors
   - Verify exit code is 0

5. **Build Summary**
   ```bash
   # Typical build output should include:
   # ✓ 2664 modules transformed
   # ✓ built in 6.91s
   # dist/index.html  2.45 kB
   # dist/assets/main.js  1.02 MB
   ```

---

## 🚨 Important Notes

1. **Check for Environment-Specific Builds**
   - Some projects have different build commands for staging vs production
   - Look for scripts like `build:staging`, `build:prod`

2. **Verify API Endpoints**
   - Ensure the build uses correct API URLs for livestock monitoring
   - Check for hardcoded localhost URLs
   - Verify IoT sensor endpoints are properly configured

3. **Check for Build-Time Optimizations**
   - Code splitting (especially for animal type modules)
   - Tree shaking
   - Image optimization (animal icons, pasture maps)
   - Gzip compression
   - Service Worker for offline monitoring

4. **Livestock-Specific Considerations**
   - **Real-time Data**: WebSocket connections for live sensor data
   - **Map Integration**: Ensure map libraries are properly bundled
   - **Animal Icons**: Verify all animal SVGs are included in build
   - **Sensor Data Types**: Ensure TypeScript types for different animal sensors
   - **Alert System**: Verify alert notification system is built
   - **Offline Support**: Pasture areas may have poor connectivity

5. **Security Considerations**
   - Remove development dependencies
   - Ensure no sensitive API keys in build
   - Verify CORS settings for IoT APIs
   - Check sensor data encryption

---

## 📞 Support Information

If you encounter issues:
1. Check the project's README.md for specific build instructions
2. Look for CONTRIBUTING.md or DEVELOPMENT.md
3. Check package.json scripts section
4. Review any Dockerfile or CI/CD configuration

---

## 🎉 Success Criteria

✅ Build completes without errors  
✅ Build artifacts generated in correct directory  
✅ Main HTML file includes all necessary assets  
✅ No console errors in production build  
✅ Application loads correctly from build files  
✅ All API endpoints work in production mode  

---

**Request Created:** December 1, 2025 23:37 UTC+02:00  
**Project:** Livestock Health Monitor  
**Priority:** High  
**Expected Build Time:** 5-15 minutes (depending on project size)  
**Support:** Available for troubleshooting

---

**Please proceed with the build and report any issues encountered.**
