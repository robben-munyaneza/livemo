# Livemo Complete Development Prompt

**Platform Name:** Livemo (Livestock Monitor)  
**Repository:** /Users/Remy/WORKSPACE/KEYNUS/livestock-health-monitor  
**Request Type:** Complete Platform Development  
**Priority:** High  
**Target Users:** Pasture Owners, Livestock Farmers, Ranch Managers

---

## 🎯 Platform Overview

Livemo is a comprehensive livestock management platform that empowers pasture owners to monitor, manage, and optimize their livestock operations through cutting-edge sensor technology and intelligent system integration.

### **Mission**
Empowering livestock owners with technology for sustainable, profitable, and humane animal management

### **Vision**
The global standard for livestock management technology

---

## 🐄 Supported Livestock Types

### **Current Categories**
1. **Poultry** 🐔
   - Chicken - Layers & Broilers
   - Ducks - Egg & Meat Production
   - Turkeys - Commercial Turkey Farming

2. **Cattle** 🐄
   - Cows - Dairy & Beef Cattle

3. **Small Ruminants** 🐐
   - Goats - Dairy & Meat Goats
   - Sheep - Wool & Meat

4. **Swine** 🐷
   - Pigs - Commercial Swine

5. **Equine** 🐴
   - Horses - Work & Recreation

6. **Small Animals** 🐰
   - Rabbits - Commercial Breeding

---

## 📱 Core Platform Functionalities

### 1. **Real-Time Health Monitoring** 🏥
- Continuous health tracking via wearable IoT sensors
- Vital signs monitoring (temperature, heart rate, respiration)
- Activity level tracking and behavior analysis
- Early disease detection and alert system

**Benefits for Owners:**
- Early Disease Detection: Identify sick animals 24-48 hours before visible symptoms
- Reduced Mortality: Quick intervention saves lives
- Lower Veterinary Costs: Prevent expensive treatments through early detection
- Improved Productivity: Healthy animals produce better (milk, eggs, meat)
- Peace of Mind: 24/7 monitoring without physical presence

### 2. **Location & Pasture Management** 🗺️
- GPS tracking of each animal
- Virtual fence boundaries and geofencing
- Pasture utilization analysis
- Movement pattern monitoring

**Benefits for Owners:**
- Prevent Loss: Immediate alerts if animals leave designated areas
- Optimize Grazing: Better pasture management prevents overgrazing
- Reduce Labor: No need for physical fence checking
- Improve Security: Track stolen or lost animals quickly
- Better Planning: Data-driven pasture rotation decisions

### 3. **Feed Management & Nutrition** 🌾
- Automated feeding schedule management
- Feed consumption tracking per animal
- Nutritional requirement calculations
- Feed inventory and cost optimization

**Benefits for Owners:**
- Reduce Feed Waste: Optimize feeding amounts and schedules
- Lower Costs: 15-25% reduction in feed expenses
- Improve Growth: Better nutrition leads to faster growth
- Save Time: Automated scheduling reduces manual work
- Better ROI: Optimal feed-to-production ratios

### 4. **Breeding & Reproduction Management** 💕
- Heat detection and breeding cycle tracking
- Pregnancy monitoring via sensors
- Genetic record keeping
- Breeding schedule optimization

**Benefits for Owners:**
- Increase Birth Rates: Better breeding timing
- Reduce Miscarriages: Early pregnancy complications detection
- Improve Genetics: Better breeding decisions
- Plan Production: Predictable birthing schedules
- Enhanced Record Keeping: Complete reproductive history

### 5. **Weight & Growth Tracking** ⚖️
- Automated weight measurements via smart scales
- Growth curve analysis
- Performance benchmarking
- Market readiness predictions

**Benefits for Owners:**
- Optimal Selling: Sell at peak weight for best prices
- Performance Tracking: Identify underperforming animals
- Better Planning: Predict market readiness
- Quality Control: Consistent product quality
- Increased Profits: Optimize weight-to-feed ratios

### 6. **Vaccination & Medical Records** 💉
- Automated vaccination schedules
- Medical treatment tracking
- Compliance reporting
- Supply management

**Benefits for Owners:**
- Never Miss Vaccinations: Automated reminders
- Regulatory Compliance: Easy report generation
- Better Health Management: Complete medical history
- Reduce Penalties: Avoid compliance issues
- Professional Management: Industry-standard record keeping

### 7. **Environmental Monitoring** 🌡️
- Weather condition monitoring
- Pasture quality assessment
- Air and water quality tracking
- Climate impact analysis

**Benefits for Owners:**
- Weather Protection: Move animals before bad weather
- Better Pasture Management: Optimal grazing conditions
- Disease Prevention: Climate-related disease risk reduction
- Resource Planning: Better water and feed planning
- Risk Management: Climate-related risk mitigation

### 8. **Alert & Notification System** 🚨
- Multi-channel alert system (SMS, Email, App Push)
- Customizable alert thresholds
- Escalation protocols
- Historical alert tracking

**Benefits for Owners:**
- Immediate Response: Quick action on critical issues
- Customizable Control: Set alerts based on specific needs
- Peace of Mind: Know you'll be notified of issues
- Better Decision Making: Data-driven alert responses
- Risk Reduction: Proactive problem solving

### 9. **Analytics & Business Intelligence** 📊
- Performance analytics and reporting
- Profitability analysis
- Trend identification
- Predictive analytics

**Benefits for Owners:**
- Better Decisions: Data-driven business choices
- Increased Profitability: Identify optimization opportunities
- Competitive Advantage: Advanced analytics capabilities
- Planning: Better long-term planning
- Investment Optimization: Know where to invest resources

### 10. **Mobile App for Field Operations** 📱
- Mobile access to all platform features
- Offline capabilities for remote areas
- Field data entry and scanning
- Push notifications

**Benefits for Owners:**
- Mobility: Manage from anywhere
- Field Efficiency: Work directly with animals
- Remote Management: No need to be on-site
- Accessibility: 24/7 access to information
- Flexibility: Work in any location

---

## 🎨 UI Design System with Material Design

### **Material Design 3.0 Implementation**
Using Google Material Design 3.0 with custom livestock theme for modern, accessible, and consistent user experience.

### **Material Design Theme Configuration**
```javascript
// Material-UI Theme Configuration
const livemoTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#4A3C28',        // Umber - primary brand color
      light: '#6B4E3D',       // Lighter umbers
      dark: '#3A2E1F',        // Darker umbers
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#C8B88B',        // Cafe au lait - secondary color
      light: '#E6DCC5',        // Lighter cafe au lait
      dark: '#A67C52',        // Amber brown
      contrastText: '#000000',
    },
    background: {
      default: '#FFFFFF',      // White background
      paper: '#FFFFFF',       // Card surfaces
    },
    text: {
      primary: '#000000',      // Black primary text
      secondary: '#333333',    // Dark gray secondary text
      disabled: '#666666',     // Light gray disabled text
    },
    success: {
      main: '#2D5016',        // Deep green for success
    },
    warning: {
      main: '#D2691E',        // Warm orange for warnings
    },
    error: {
      main: '#8B0000',         // Dark red for errors
    },
    info: {
      main: '#1E3A8A',         // Deep blue for info
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
      color: '#4A3C28',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
      color: '#4A3C28',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
      color: '#4A3C28',
    },
    body1: {
      fontSize: '1rem',
      color: '#000000',
    },
    body2: {
      fontSize: '0.875rem',
      color: '#333333',
    },
  },
  shape: {
    borderRadius: 12,          // Consistent border radius
  },
  elevation: {
    1: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
    2: '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
    3: '0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12)',
  },
});
```

### **Material Design Components**

#### **1. Navigation with Material App Bar**
```jsx
<ThemeProvider theme={livemoTheme}>
  <AppBar position="static" elevation={2}>
    <Toolbar>
      <IconButton edge="start" color="inherit">
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        🐄 Livemo
      </Typography>
      <Button color="inherit">Dashboard</Button>
      <Button color="inherit">Animals</Button>
      <Button color="inherit">Health</Button>
      <IconButton color="inherit">
        <Badge badgeContent={3} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <Avatar sx={{ bgcolor: 'secondary.main' }}>JD</Avatar>
    </Toolbar>
  </AppBar>
</ThemeProvider>
```

#### **2. Material Cards for Dashboard**
```jsx
<Card elevation={3} sx={{ p: 2, bgcolor: 'background.paper' }}>
  <CardContent>
    <Box display="flex" alignItems="center" mb={2}>
      <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>
        <PetsIcon />
      </Avatar>
      <Typography variant="h6" color="primary">
        Total Animals
      </Typography>
    </Box>
    <Typography variant="h3" color="text.primary" gutterBottom>
      247
    </Typography>
    <Typography variant="body2" color="text.secondary">
      +5 this week
    </Typography>
  </CardContent>
</Card>
```

#### **3. Material Data Tables**
```jsx
<TableContainer component={Paper} elevation={2}>
  <Table>
    <TableHead>
      <TableRow sx={{ bgcolor: 'primary.main' }}>
        <TableCell sx={{ color: 'primary.contrastText' }}>ID</TableCell>
        <TableCell sx={{ color: 'primary.contrastText' }}>Type</TableCell>
        <TableCell sx={{ color: 'primary.contrastText' }}>Name</TableCell>
        <TableCell sx={{ color: 'primary.contrastText' }}>Status</TableCell>
        <TableCell sx={{ color: 'primary.contrastText' }}>Health</TableCell>
        <TableCell sx={{ color: 'primary.contrastText' }}>Actions</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {animals.map((animal) => (
        <TableRow key={animal.id} hover>
          <TableCell>{animal.id}</TableCell>
          <TableCell>{animal.type}</TableCell>
          <TableCell>{animal.name}</TableCell>
          <TableCell>
            <Chip 
              label={animal.status} 
              color={animal.status === 'Healthy' ? 'success' : 'warning'}
              size="small"
            />
          </TableCell>
          <TableCell>
            <Box display="flex" alignItems="center">
              <LinearProgress 
                variant="determinate" 
                value={animal.health} 
                sx={{ width: 100, mr: 1 }}
              />
              <Typography variant="body2">{animal.health}%</Typography>
            </Box>
          </TableCell>
          <TableCell>
            <IconButton size="small">
              <EditIcon />
            </IconButton>
            <IconButton size="small">
              <DeleteIcon />
            </IconButton>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>
```

#### **4. Material Forms**
```jsx
<Box component="form" sx={{ mt: 3 }}>
  <Grid container spacing={3}>
    <Grid item xs={12} sm={6}>
      <TextField
        fullWidth
        label="Animal Name"
        variant="outlined"
        required
        InputProps={{
          startAdornment: <PetsIcon sx={{ mr: 1, color: 'primary.main' }} />,
        }}
      />
    </Grid>
    <Grid item xs={12} sm={6}>
      <FormControl fullWidth variant="outlined">
        <InputLabel>Animal Type</InputLabel>
        <Select label="Animal Type" startAdornment={<PetsIcon />}>
          <MenuItem value="cattle">🐄 Cattle</MenuItem>
          <MenuItem value="goats">🐐 Goats</MenuItem>
          <MenuItem value="poultry">🐔 Poultry</MenuItem>
          <MenuItem value="swine">🐷 Swine</MenuItem>
        </Select>
      </FormControl>
    </Grid>
    <Grid item xs={12}>
      <TextField
        fullWidth
        multiline
        rows={4}
        label="Notes"
        variant="outlined"
      />
    </Grid>
    <Grid item xs={12}>
      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
        <Button variant="outlined" color="secondary">
          Cancel
        </Button>
        <Button variant="contained" color="primary">
          Add Animal
        </Button>
      </Box>
    </Grid>
  </Grid>
</Box>
```

#### **5. Material Navigation Drawer**
```jsx
<Drawer
  variant="temporary"
  open={drawerOpen}
  onClose={handleDrawerClose}
  sx={{
    '& .MuiDrawer-paper': {
      width: 280,
      bgcolor: 'background.paper',
      borderRight: '1px solid rgba(0, 0, 0, 0.12)',
    },
  }}
>
  <Toolbar />
  <Box sx={{ overflow: 'auto' }}>
    <List>
      <ListItem button component={Link} to="/dashboard">
        <ListItemIcon>
          <DashboardIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button component={Link} to="/animals">
        <ListItemIcon>
          <PetsIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Animals" />
      </ListItem>
      <ListItem button component={Link} to="/health">
        <ListItemIcon>
          <FavoriteIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Health" />
      </ListItem>
      <ListItem button component={Link} to="/sensors">
        <ListItemIcon>
          <SensorsIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Sensors" />
      </ListItem>
    </List>
    <Divider />
    <List>
      <ListItem button component={Link} to="/settings">
        <ListItemIcon>
          <SettingsIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItem>
    </List>
  </Box>
</Drawer>
```

#### **6. Material Alerts and Notifications**
```jsx
{alerts.map((alert) => (
  <Alert 
    key={alert.id}
    severity={alert.severity}
    sx={{ mb: 2 }}
    action={
      <IconButton size="small" onClick={() => dismissAlert(alert.id)}>
        <CloseIcon fontSize="small" />
      </IconButton>
    }
  >
    <AlertTitle>{alert.title}</AlertTitle>
    {alert.message}
  </Alert>
))}
```

### **Material Design Principles Applied**

#### **1. Material Surfaces**
- **Cards**: Elevation-based shadows for depth
- **Buttons**: Ripple effects and state changes
- **Forms**: Clear visual hierarchy with proper spacing
- **Navigation**: Intuitive drawer and app bar patterns

#### **2. Material Motion**
- **Transitions**: Smooth animations between states
- **Loading**: Skeleton loaders and progress indicators
- **Interactions**: Touch-friendly with visual feedback
- **Micro-interactions**: Hover states and focus indicators

#### **3. Material Accessibility**
- **Color Contrast**: WCAG AA compliant color combinations
- **Typography**: Clear, readable font hierarchy
- **Touch Targets**: Minimum 44px touch targets
- **Keyboard Navigation**: Full keyboard accessibility

#### **4. Material Adaptability**
- **Responsive**: Works seamlessly on all screen sizes
- **Dark Mode**: Optional dark theme support
- **RTL Support**: Right-to-left language support
- **High DPI**: Crisp visuals on high-density displays

### **Material Design Components Library**
```javascript
// Custom Material Components for Livemo
export const LivemoComponents = {
  // Animal Status Chip
  AnimalStatusChip: ({ status, health }) => (
    <Chip
      icon={<PetsIcon />}
      label={`${status} (${health}%)`}
      color={status === 'Healthy' ? 'success' : 'warning'}
      variant="outlined"
    />
  ),
  
  // Health Progress Bar
  HealthProgressBar: ({ value }) => (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <LinearProgress
        variant="determinate"
        value={value}
        sx={{
          width: 120,
          height: 8,
          borderRadius: 4,
          bgcolor: 'grey.200',
          '& .MuiLinearProgress-bar': {
            borderRadius: 4,
            bgcolor: value > 80 ? 'success.main' : value > 50 ? 'warning.main' : 'error.main',
          },
        }}
      />
      <Typography variant="body2" sx={{ ml: 1 }}>
        {value}%
      </Typography>
    </Box>
  ),
  
  // Sensor Status Card
  SensorStatusCard: ({ sensor }) => (
    <Card elevation={2} sx={{ p: 2 }}>
      <Box display="flex" alignItems="center" mb={1}>
        <BatteryIcon 
          sx={{ 
            color: sensor.battery > 50 ? 'success.main' : 'warning.main',
            mr: 1 
          }} 
        />
        <Typography variant="subtitle2">{sensor.id}</Typography>
      </Box>
      <Typography variant="body2" color="text.secondary">
        Battery: {sensor.battery}%
      </Typography>
      <Chip
        label={sensor.status}
        size="small"
        color={sensor.status === 'Active' ? 'success' : 'default'}
        sx={{ mt: 1 }}
      />
    </Card>
  ),
};
```

### **Design Principles**
- **Material Design 3.0**: Latest Google design system
- **Custom Theme**: Earth tones integrated with Material principles
- **Consistent Components**: Reusable Material components
- **Accessibility First**: WCAG compliant design
- **Responsive**: Mobile-first approach
- **Performance**: Optimized Material components

### **Overall Layout Structure**
```
┌─────────────────────────────────────────────────────────┐
│                    Header Bar                            │
│  [Logo] [Navigation] [User Menu] [Alerts] [Settings]    │
├─────────────────────────────────────────────────────────┤
│  Sidebar │                Main Content Area              │
│          │                                             │
│ [Menu]   │  ┌─────────────────────────────────────────┐ │
│ [Animals]│  │            Page Header                   │ │
│ [Sensors]│  │  [Title] [Actions] [Filters] [Search]    │ │
│ [Health] │  ├─────────────────────────────────────────┤ │
│ [Feed]   │  │                                         │ │
│ [Pasture]│  │            Content Area                  │ │
│ [Reports]│  │                                         │ │
│ [Settings]│  │                                         │ │
│          │  │                                         │ │
│          │  └─────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
```

---

## 🏗️ Technical Architecture

### **Technology Stack**
- **Frontend:** React with Material-UI (MUI) and TypeScript
- **Backend:** Laravel (PHP) with REST API
- **Database:** PostgreSQL for structured data, MongoDB for sensor data
- **Real-time:** WebSocket for live sensor data
- **Mobile:** React Native with Material Design Components
- **IoT Integration:** MQTT protocol for sensor communication
- **Cloud:** AWS/Azure for scalable infrastructure
- **Maps:** Google Maps or Mapbox for pasture visualization
- **Design System:** Google Material Design 3.0 with custom livestock theme

### **Component Architecture**
```
Frontend/
├── components/
│   ├── common/          # Reusable UI components
│   ├── dashboard/       # Dashboard components
│   ├── animals/         # Animal management components
│   ├── health/          # Health monitoring components
│   ├── sensors/         # Sensor management components
│   ├── feed/            # Feed management components
│   ├── pasture/         # Pasture management components
│   └── reports/         # Reporting components
├── pages/               # Page components
├── services/            # API services
├── utils/               # Utility functions
├── hooks/               # Custom React hooks
└── types/               # TypeScript definitions
```

### **Laravel Backend Architecture**
```
Backend/
├── app/
│   ├── Http/
│   │   ├── Controllers/
│   │   │   ├── AnimalController.php         # Animal CRUD operations
│   │   │   ├── HealthController.php         # Health monitoring endpoints
│   │   │   ├── SensorController.php         # Sensor data endpoints
│   │   │   ├── FeedController.php           # Feed management endpoints
│   │   │   ├── PastureController.php        # Pasture management endpoints
│   │   │   ├── AlertController.php          # Alert system endpoints
│   │   │   ├── ReportController.php         # Reporting endpoints
│   │   │   ├── AuthController.php           # Authentication
│   │   │   └── APIController.php            # Base API controller
│   │   ├── Middleware/
│   │   │   ├── AuthMiddleware.php           # JWT authentication
│   │   │   ├── CorsMiddleware.php           # CORS handling
│   │   │   ├── RateLimitMiddleware.php      # API rate limiting
│   │   │   └── ValidationMiddleware.php     # Request validation
│   │   ├── Requests/
│   │   │   ├── AnimalRequest.php            # Animal validation
│   │   │   ├── SensorRequest.php            # Sensor data validation
│   │   │   └── HealthRequest.php            # Health data validation
│   │   └── Resources/
│   │       ├── AnimalResource.php           # API resource transformers
│   │       ├── SensorResource.php           # Sensor data transformers
│   │       └── HealthResource.php           # Health data transformers
│   ├── Models/
│   │   ├── Animal.php                        # Animal model
│   │   ├── Sensor.php                        # Sensor model
│   │   ├── HealthRecord.php                  # Health records model
│   │   ├── FeedSchedule.php                  # Feed schedule model
│   │   ├── Pasture.php                       # Pasture model
│   │   ├── Alert.php                         # Alert model
│   │   ├── User.php                          # User model (extends Authenticatable)
│   │   └── Farm.php                          # Farm model
│   ├── Services/
│   │   ├── AnimalService.php                 # Animal business logic
│   │   ├── HealthService.php                 # Health monitoring logic
│   │   ├── SensorService.php                 # Sensor data processing
│   │   ├── AlertService.php                  # Alert system logic
│   │   ├── FeedService.php                   # Feed management logic
│   │   ├── PastureService.php                # Pasture management logic
│   │   ├── ReportService.php                 # Reporting logic
│   │   └── NotificationService.php           # Notification handling
│   ├── Jobs/
│   │   ├── ProcessSensorData.php             # Queue job for sensor data
│   │   ├── SendHealthAlerts.php              # Queue job for alerts
│   │   ├── GenerateReports.php               # Queue job for reports
│   │   └── SyncIoTData.php                   # Queue job for IoT sync
│   ├── Events/
│   │   ├── SensorDataReceived.php           # Event for sensor data
│   │   ├── HealthAlertTriggered.php         # Event for health alerts
│   │   ├── AnimalLocationChanged.php         # Event for location updates
│   │   └── FeedScheduleUpdated.php          # Event for feed changes
│   └── Listeners/
│       ├── SendNotification.php              # Send notifications
│       ├── UpdateAnalytics.php              # Update analytics data
│       ├── LogActivity.php                  # Log user activities
│       └── CacheData.php                     # Cache frequently used data
├── config/
│   ├── database.php                          # Database configuration
│   ├── queue.php                             # Queue configuration
│   ├── broadcasting.php                      # WebSocket configuration
│   ├── iot.php                               # IoT sensor configuration
│   └── livemo.php                            # Livemo-specific config
├── database/
│   ├── migrations/
│   │   ├── create_animals_table.php
│   │   ├── create_sensors_table.php
│   │   ├── create_health_records_table.php
│   │   ├── create_feed_schedules_table.php
│   │   ├── create_pastures_table.php
│   │   ├── create_alerts_table.php
│   │   └── create_farms_table.php
│   └── seeders/
│       ├── AnimalSeeder.php
│       ├── SensorSeeder.php
│       └── UserSeeder.php
├── routes/
│   ├── api.php                               # API routes
│   ├── web.php                               # Web routes (if needed)
│   └── channels.php                          # WebSocket channels
├── app/Console/Commands/
│   ├── ProcessIoTData.php                    # CLI command for IoT data
│   ├── GenerateHealthReports.php            # CLI command for reports
│   ├── CleanupOldData.php                    # CLI command for data cleanup
│   └── SyncSensorDevices.php                # CLI command for sensor sync
└── app/Providers/
    ├── RouteServiceProvider.php
    ├── BroadcastServiceProvider.php
    └── EventServiceProvider.php
```

---

## 📱 Mobile App Structure

### **Mobile Features**
- **Offline Mode:** Sync data when connectivity returns
- **Push Notifications:** Real-time alerts
- **GPS Integration:** Field location tracking
- **Camera Integration:** Animal photo documentation
- **Barcode/QR Scanning:** Quick animal identification
- **Voice Commands:** Hands-free operation in field

### **Mobile Layout**
```
┌─────────────────────────┐
│ ☰  🐄 Livemo    👤     │
├─────────────────────────┤
│                         │
│   ┌─────────────────┐   │
│   │   Stats Cards   │   │
│   └─────────────────┘   │
│                         │
│   ┌─────────────────┐   │
│   │   Health Status │   │
│   └─────────────────┘   │
│                         │
│   ┌─────────────────┐   │
│   │   Recent Items  │   │
│   └─────────────────┘   │
│                         │
│ ┌─────────────────────┐ │
│ │ 🏠 🐄 🏥 📊 ⚙️    │ │
│ │ Home Animals Health │ │
│ └─────────────────────┘ │
└─────────────────────────┘
```

---

## 🔧 Build & Deployment Instructions

### **1. Navigate to Project Directory**
```bash
cd /Users/Remy/WORKSPACE/KEYNUS/livestock-health-monitor
```

### **2. Identify Frontend Technology**
First, determine what frontend framework is being used:
- Check for `package.json` (React/Vue/Angular)
- Look for `angular.json` (Angular)
- Check for `vite.config.js` or `vue.config.js` (Vue)
- Look for `next.config.js` (Next.js)
- Check for `gatsby-config.js` (Gatsby)

### **3. Install Dependencies**
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

### **4. Set Environment Variables**
```bash
# Frontend Environment Variables
# Check for .env.example
cp .env.example .env

# Set required environment variables for livestock monitoring
echo "NODE_ENV=production" >> .env
echo "REACT_APP_API_URL=https://api.livestock-health-monitor.com" >> .env
echo "REACT_APP_IOT_API_URL=https://iot.livestock-health-monitor.com" >> .env
echo "REACT_APP_MAP_API_KEY=your_map_api_key_here" >> .env
echo "REACT_APP_WEBSOCKET_URL=wss://ws.livestock-health-monitor.com" >> .env

# Backend Laravel Environment Variables
cd backend || cd api
cp .env.example .env

# Laravel configuration
echo "APP_NAME=Livemo" >> .env
echo "APP_ENV=production" >> .env
echo "APP_DEBUG=false" >> .env
echo "APP_URL=https://api.livestock-health-monitor.com" >> .env

# Database configuration
echo "DB_CONNECTION=pgsql" >> .env
echo "DB_HOST=your_database_host" >> .env
echo "DB_PORT=5432" >> .env
echo "DB_DATABASE=livemo" >> .env
echo "DB_USERNAME=livemo_user" >> .env
echo "DB_PASSWORD=your_secure_password" >> .env

# Laravel specific
echo "LOG_CHANNEL=stack" >> .env
echo "BROADCAST_DRIVER=redis" >> .env
echo "CACHE_DRIVER=redis" >> .env
echo "FILESYSTEM_DISK=local" >> .env
echo "QUEUE_CONNECTION=redis" >> .env
echo "SESSION_DRIVER=redis" >> .env
echo "SESSION_LIFETIME=120" >> .env

# JWT Authentication
echo "JWT_SECRET=your_jwt_secret_key_here" >> .env

# IoT and Sensors
echo "IOT_MQTT_HOST=your_mqtt_host" >> .env
echo "IOT_MQTT_PORT=1883" >> .env
echo "IOT_MQTT_USERNAME=your_mqtt_username" >> .env
echo "IOT_MQTT_PASSWORD=your_mqtt_password" >> .env
echo "SENSOR_API_KEY=your_sensor_api_key_here" >> .env
echo "GPS_API_KEY=your_gps_api_key_here" >> .env
echo "WEATHER_API_KEY=your_weather_api_key_here" >> .env

# Notifications
echo "SMS_API_KEY=your_sms_api_key_here" >> .env
echo "EMAIL_SERVICE_URL=https://email.livestock-health-monitor.com" >> .env
echo "MAIL_MAILER=smtp" >> .env
echo "MAIL_HOST=your_smtp_host" >> .env
echo "MAIL_PORT=587" >> .env
echo "MAIL_USERNAME=your_email_username" >> .env
echo "MAIL_PASSWORD=your_email_password" >> .env
echo "MAIL_ENCRYPTION=tls" >> .env

# Livemo specific
echo "ALERT_THRESHOLD_TEMPERATURE=40.5" >> .env
echo "ALERT_THRESHOLD_HEART_RATE=120" >> .env
echo "MAX_ANIMALS_PER_FARM=1000" >> .env
echo "SENSOR_DATA_RETENTION_DAYS=365" >> .env
```

### **5. Build for Production**
```bash
# Frontend (React with Material-UI)
npm run build

# Backend (Laravel)
composer install --no-dev --optimize-autoloader
php artisan config:cache
php artisan route:cache
php artisan view:cache
php artisan migrate --force
php artisan storage:link
```

### **6. Verify Build Output**
Check for build artifacts:
- `dist/` folder (React/Vue)
- `build/` folder (Create React App)
- `dist/livestock-health-monitor/` (Angular)
- `.next/` folder (Next.js)
- `public/` folder (Gatsby)

### **7. Deploy to Production**
```bash
# Deploy to web server
scp -r dist/* user@server:/var/www/livestock-health-monitor/

# Or use deployment platform
vercel --prod
netlify deploy --prod
```

---

## 📊 Economic Benefits & ROI

### **Direct Cost Savings**
- **Feed Costs:** 15-25% reduction through optimization
- **Veterinary Costs:** 30-40% reduction through early detection
- **Labor Costs:** 20-30% reduction through automation
- **Loss Prevention:** 50-70% reduction in animal losses

### **Revenue Enhancement**
- **Production Increase:** 10-20% better production through health optimization
- **Quality Improvement**: Premium prices for healthier animals
- **Market Timing**: Better selling timing for optimal prices
- **Expansion Capability**: Scale operations without proportional cost increase

### **ROI Timeline**
- **Month 1-3**: Initial investment and setup
- **Month 4-6**: Start seeing cost reductions
- **Month 7-12**: Full ROI achieved
- **Year 2+**: 25-50% increase in profitability

---

## 🚀 Development Phases

### **Phase 1: Core Platform** (Current)
- Basic health monitoring
- Location tracking
- Feed management
- Alert system
- Web dashboard

### **Phase 2: Advanced Features** (6 months)
- AI-powered disease prediction
- Drone integration for monitoring
- Advanced analytics
- Mobile app enhancements
- Sensor expansion

### **Phase 3: Ecosystem Integration** (12 months)
- Market integration for selling
- Supply chain management
- Financial services integration
- Regulatory compliance automation
- Multi-farm management

### **Phase 4: Full Automation** (18 months)
- Robotic feeding systems
- Automated health interventions
- Predictive maintenance
- Full farm automation
- AI-driven decision making

---

## 🎯 Success Metrics

### **Operational Metrics**
- **Animal Health**: 90% reduction in disease-related losses
- **Feed Efficiency**: 20% improvement in feed-to-production ratios
- **Labor Efficiency**: 30% reduction in manual monitoring time
- **Response Time**: 95% reduction in issue detection time

### **Business Metrics**
- **ROI**: 200-300% return on investment
- **Profitability**: 25-50% increase in net profits
- **Scalability**: 10x operational capacity without proportional cost increase
- **Sustainability**: Improved environmental sustainability metrics

---

## 📞 Support & Implementation

### **Implementation Process**
1. **Consultation**: Assess farm needs and requirements
2. **System Design**: Customize platform for specific operations
3. **Installation**: Professional sensor and system installation
4. **Training**: Comprehensive user training
5. **Go-Live**: Full system activation
6. **Support**: Ongoing assistance and optimization

### **Support Services**
- **24/7 Technical Support**: Always available assistance
- **Regular Maintenance**: System updates and maintenance
- **Training Programs**: Continuous education and training
- **Community Access**: Network of other users and experts

---

## 🛠️ Troubleshooting Guide

### **Frontend Build Issues**
1. **Node Version Mismatch**
   ```bash
   nvm use 18
   node --version
   ```

2. **Dependency Installation Issues**
   ```bash
   npm cache clean --force
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Material-UI Build Issues**
   ```bash
   npm install @mui/material @emotion/react @emotion/styled
   npm install @mui/icons-material
   npm install @mui/lab
   ```

4. **Build Memory Issues**
   ```bash
   export NODE_OPTIONS="--max-old-space-size=4096"
   npm run build
   ```

5. **TypeScript Errors**
   ```bash
   npx tsc --noEmit
   npm run type-check
   ```

### **Laravel Backend Issues**
1. **Composer Dependencies**
   ```bash
   composer install --no-dev --optimize-autoloader
   composer update
   ```

2. **Laravel Cache Issues**
   ```bash
   php artisan config:clear
   php artisan route:clear
   php artisan view:clear
   php artisan cache:clear
   ```

3. **Database Connection Issues**
   ```bash
   php artisan migrate:status
   php artisan migrate --force
   php artisan db:seed
   ```

4. **Queue Issues**
   ```bash
   php artisan queue:work
   php artisan queue:failed
   php artisan queue:retry all
   ```

5. **JWT Authentication Issues**
   ```bash
   php artisan jwt:secret
   php artisan config:cache
   ```

6. **Storage Permission Issues**
   ```bash
   sudo chown -R www-data:www-data storage bootstrap/cache
   sudo chmod -R 775 storage bootstrap/cache
   php artisan storage:link
   ```

### **Common Runtime Issues**
1. **API Connection Errors**
   - Check environment variables (REACT_APP_API_URL)
   - Verify Laravel API endpoints
   - Test network connectivity
   - Check CORS configuration

2. **Sensor Data Issues**
   - Check MQTT connection in Laravel
   - Verify sensor battery levels
   - Test sensor connectivity
   - Check Laravel queue processing

3. **Real-time Updates Issues**
   - Check Laravel WebSocket configuration
   - Verify Redis connection for broadcasting
   - Test browser WebSocket compatibility
   - Check network stability

4. **Authentication Issues**
   - Verify JWT token generation
   - Check Laravel authentication middleware
   - Test API token expiration
   - Verify CORS preflight requests

5. **Database Performance Issues**
   - Check PostgreSQL connection limits
   - Optimize Laravel queries
   - Verify database indexes
   - Monitor query performance

### **Laravel Specific Debugging**
1. **Enable Debug Mode (Development Only)**
   ```bash
   # In .env
   APP_DEBUG=true
   php artisan config:cache
   ```

2. **Check Laravel Logs**
   ```bash
   tail -f storage/logs/laravel.log
   ```

3. **Test API Endpoints**
   ```bash
   php artisan route:list
   php artisan tinker
   # Test endpoints in tinker
   ```

4. **Monitor Queue Jobs**
   ```bash
   php artisan queue:monitor
   php artisan queue:failed-table
   ```

5. **Check Cache Status**
   ```bash
   php artisan cache:info
   redis-cli info
   ```

---

## 📋 Testing Checklist

### **Build Verification**
- [ ] Build completes without errors
- [ ] Build artifacts generated in correct directory
- [ ] Main HTML file includes all necessary assets
- [ ] No console errors in production build
- [ ] Application loads correctly from build files
- [ ] All API endpoints work in production mode

### **Functional Testing**
- [ ] User registration and login
- [ ] Animal registration and management
- [ ] Health monitoring dashboard
- [ ] Sensor data visualization
- [ ] Alert system functionality
- [ ] Mobile app responsiveness
- [ ] Offline mode functionality

### **Performance Testing**
- [ ] Page load times under 3 seconds
- [ ] Real-time data updates under 1 second
- [ ] Mobile app performance on low-end devices
- [ ] Database query optimization
- [ ] API response times under 500ms

---

## 🎯 Final Requirements

### **Build Requirements**
- **Node.js 16+** (check package.json)
- **npm 7+ or yarn 1.22+**
- **4GB RAM minimum**
- **10GB disk space**

### **Deployment Requirements**
- **SSL Certificate** for secure connections
- **Domain Name** (livestock-health-monitor.com or similar)
- **Database Server** (PostgreSQL recommended)
- **File Storage** for sensor data and images
- **Backup System** for data protection

### **Security Requirements**
- **HTTPS** for all connections
- **API Authentication** with JWT tokens
- **Data Encryption** for sensitive information
- **Regular Security Updates** for dependencies
- **Privacy Compliance** (GDPR, CCPA)

---

## 🚀 Get Started

### **Immediate Actions**
1. **Navigate to project directory**
2. **Install dependencies**
3. **Set environment variables**
4. **Build the application**
5. **Test functionality**
6. **Deploy to production**

### **Next Steps**
1. **Set up development environment**
2. **Configure IoT sensors**
3. **Test real-time data flow**
4. **Implement user authentication**
5. **Set up monitoring and alerts**
6. **Begin user testing**

---

**Platform:** Livemo (Livestock Monitor)  
**Mission:** Empowering livestock owners with technology for sustainable, profitable, and humane animal management  
**Vision:** The global standard for livestock management technology  
**Values:** Innovation, Sustainability, Animal Welfare, User Success

---

**Request Created:** December 1, 2025 23:54 UTC+02:00  
**Platform:** Livemo  
**Target Market:** Global Livestock Industry  
**Technology Stack:** IoT + AI + Mobile + Cloud Analytics  
**Expected Build Time:** 5-15 minutes (depending on project size)  
**Support:** Available for troubleshooting

---

**Please proceed with the development and report any issues encountered.**


# Livemo Customer Portal - Design & Specification

**Portal Name:** Livemo Customer Dashboard  
**Target Users:** Livestock Owners, Pasture Managers, Farm Operators  
**Purpose:** Self-service livestock monitoring and farm management  
**Design Pattern:** Customer-focused dashboard with key metrics and actions

---

## 🎯 Customer Portal Overview

The Livemo Customer Portal is a dedicated interface for livestock owners to:
- **Monitor** their animals' health in real-time
- **Manage** their farm operations and schedules
- **Access** reports and insights about their livestock
- **Receive** alerts and notifications
- **Plan** breeding, feeding, and pasture rotation
- **Track** costs and profitability

---

## 🏗️ Customer Portal Layout

### **Header Navigation**
```
┌─────────────────────────────────────────────────────────────────┐
│ 🐄 LIVEMO                                                       │
│ [Dashboard] [My Animals] [Health] [Reports] [Marketplace]      │
│                                [Online Tour] [Help] [John Doe ▼]│
└─────────────────────────────────────────────────────────────────┘
```

### **Main Dashboard Layout**
```
┌─────────────────────────────────────────────────────────────────┐
│ Your Farm at a Glance                    [View all insights]    │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │ Total        │  │ Healthy      │  │ Alerts       │          │
│  │ Animals      │  │ Animals      │  │ This Week    │          │
│  │              │  │              │  │              │          │
│  │   247        │  │   235 (95%)  │  │   3          │          │
│  │ +5 this week │  │ +12 this week│  │ -2 yesterday │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
│                                                                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │ Feed         │  │ Pasture      │  │ Revenue      │          │
│  │ Efficiency   │  │ Utilization  │  │ This Month   │          │
│  │              │  │              │  │              │          │
│  │   94%        │  │   78%        │  │ $12,450      │          │
│  │ +3% this week│  │ +5% this week│  │ +8% vs last  │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 📊 Customer Portal Pages

### **1. Dashboard - "Your Farm at a Glance"**

#### **Purpose**
Quick overview of farm status and key metrics at a single glance.

#### **Key Sections**

##### **A. Quick Stats Cards (6 cards)**
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │ Total        │  │ Healthy      │  │ Alerts       │          │
│  │ Animals      │  │ Animals      │  │ This Week    │          │
│  │              │  │              │  │              │          │
│  │   247        │  │   235 (95%)  │  │   3          │          │
│  │ 🐄 🐐 🐔 🐷  │  │ ✓ Excellent  │  │ 🚨 Urgent    │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
│                                                                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │ Feed         │  │ Pasture      │  │ Revenue      │          │
│  │ Efficiency   │  │ Utilization  │  │ This Month   │          │
│  │              │  │              │  │              │          │
│  │   94%        │  │   78%        │  │ $12,450      │          │
│  │ ↑ +3% week   │  │ ↑ +5% week   │  │ ↑ +8% vs last│          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Metrics Shown:**
- Total Animals (by type breakdown)
- Healthy Animals (percentage and count)
- Active Alerts (count and severity)
- Feed Efficiency (percentage)
- Pasture Utilization (percentage)
- Monthly Revenue (estimated)

##### **B. Quick Actions Section**
```
┌─────────────────────────────────────────────────────────────────┐
│ Quick Actions                                                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ [+ Add Animal] [Schedule Feeding] [Plan Breeding] [View Alerts]│
│ [Export Report] [Contact Support] [Book Vet] [View Marketplace]│
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

##### **C. Health Status by Category**
```
┌─────────────────────────────────────────────────────────────────┐
│ Health Status by Category                                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ 🐄 Cattle:    235/245 healthy (96%)  ████████░                │
│ 🐐 Goats:     67/70 healthy (96%)    ████████░                │
│ 🐔 Poultry:   120/125 healthy (96%)  ████████░                │
│ 🐷 Swine:     15/15 healthy (100%)   ██████████               │
│ 🐑 Sheep:     23/23 healthy (100%)   ██████████               │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

##### **D. Recent Alerts & Activities**
```
┌─────────────────────────────────────────────────────────────────┐
│ Recent Alerts & Activities                                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ 🚨 URGENT: Cow #002 - Elevated temperature (39.8°C)            │
│    Action needed: Isolate and contact veterinarian             │
│    Time: 2 hours ago                                            │
│                                                                 │
│ ⚠️  WARNING: Goat #015 - Low activity (30% below normal)        │
│    Action needed: Monitor closely for illness                  │
│    Time: 1 hour ago                                             │
│                                                                 │
│ 📋 INFO: Feed delivery scheduled for tomorrow                   │
│    Quantity: 500kg mixed grain                                  │
│    Time: 9:00 AM                                                │
│                                                                 │
│ ✓ Vaccination completed for 5 animals                           │
│    Type: Foot and Mouth Disease                                │
│    Time: Yesterday                                              │
│                                                                 │
│ [View all alerts]                                               │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

##### **E. Upcoming Tasks & Schedules**
```
┌─────────────────────────────────────────────────────────────────┐
│ Upcoming Tasks & Schedules                                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ 📅 Today:                                                       │
│    • Morning feeding - 8:00 AM                                 │
│    • Health check - Pasture A                                  │
│    • Sensor battery check                                      │
│                                                                 │
│ 📅 Tomorrow:                                                    │
│    • Feed delivery - 9:00 AM (500kg)                           │
│    • Pasture rotation - Move cattle to Pasture B               │
│    • Breeding check - Goat #23                                 │
│                                                                 │
│ 📅 This Week:                                                   │
│    • Vaccination - 3 animals (Wed)                             │
│    • Veterinary visit - Health screening (Fri)                 │
│    • Weight check - All animals (Sat)                          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

##### **F. Your Farm Info Card**
```
┌─────────────────────────────────────────────────────────────────┐
│ Your Farm                                                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ 🏡 Green Valley Farm                                            │
│    Location: 5 miles away                                       │
│    Phone: (555) 123-4567                                        │
│    Email: john@greenvalleyfarm.com                              │
│                                                                 │
│ 📊 Farm Statistics:                                             │
│    • Total Pastures: 5                                          │
│    • Total Animals: 247                                         │
│    • Active Sensors: 42                                         │
│    • Member Since: Jan 2024                                     │
│                                                                 │
│ [Edit Farm Info] [View Farm Map] [Manage Team]                 │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### **2. My Animals Page**

#### **Purpose**
Detailed view and management of all livestock with filtering and search.

#### **Layout**
```
┌─────────────────────────────────────────────────────────────────┐
│ My Animals                                [+ Add Animal] [Export]│
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ [Search by name...] [Filter by Type ▼] [Filter by Status ▼]   │
│                                                                 │
│ Category Tabs:                                                  │
│ [All (247)] [🐄 Cattle (45)] [🐐 Goats (67)] [🐔 Poultry (120)]│
│ [🐷 Swine (15)] [🐑 Sheep (23)] [🐴 Horses (5)]                │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ Animal Cards (Grid View):                                       │
│                                                                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │ 🐄 Bessie    │  │ 🐄 Daisy     │  │ 🐐 Billy     │          │
│  │ Cow #001     │  │ Cow #002     │  │ Goat #045    │          │
│  │              │  │              │  │              │          │
│  │ Health: 98%  │  │ Health: 78%  │  │ Health: 92%  │          │
│  │ Weight: 650kg│  │ Weight: 620kg│  │ Weight: 85kg │          │
│  │ Status: ✓    │  │ Status: ⚠️   │  │ Status: ✓    │          │
│  │ [View]       │  │ [View]       │  │ [View]       │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
│                                                                 │
│  [Show more animals...]                                         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

#### **Individual Animal Detail View**
```
┌─────────────────────────────────────────────────────────────────┐
│ 🐄 Bessie (Cow #001)                    [Edit] [Health] [More ▼]│
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ Basic Information:                                              │
│ ├─ Type: Dairy Cattle                                          │
│ ├─ Breed: Holstein                                             │
│ ├─ Age: 4 years                                                │
│ ├─ Weight: 650kg                                               │
│ ├─ Date Added: Jan 15, 2024                                    │
│ └─ Status: Healthy ✓                                           │
│                                                                 │
│ Current Health Metrics:                                         │
│ ├─ Temperature: 38.5°C (Normal) 🟢                             │
│ ├─ Heart Rate: 65 bpm (Normal) 🟢                              │
│ ├─ Activity Level: 85% (Good) 🟢                               │
│ ├─ Last Feeding: 2 hours ago                                   │
│ ├─ Last Vaccination: 30 days ago                               │
│ └─ Weight Trend: ↑ +2kg this week                              │
│                                                                 │
│ Assigned Sensor:                                                │
│ ├─ Sensor ID: S001                                             │
│ ├─ Battery: 85%                                                │
│ ├─ Last Update: 5 minutes ago                                  │
│ └─ Status: Active 🟢                                           │
│                                                                 │
│ Breeding Information:                                           │
│ ├─ Last Heat Cycle: 15 days ago                                │
│ ├─ Breeding Status: Ready                                      │
│ ├─ Pregnancy Status: Not pregnant                              │
│ └─ Next Expected Heat: 5 days                                  │
│                                                                 │
│ Recent Health Events:                                           │
│ • 2024-12-01: Vaccination - Foot and Mouth                    │
│ • 2024-11-28: Weight check - 650kg                             │
│ • 2024-11-25: Health screening - All normal                    │
│                                                                 │
│ [Schedule Vet Visit] [Update Health] [View Full History]       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### **3. Health & Alerts Page**

#### **Purpose**
Centralized view of all health issues and alerts requiring attention.

#### **Layout**
```
┌─────────────────────────────────────────────────────────────────┐
│ Health & Alerts                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ Alert Summary:                                                  │
│ ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│ │ Critical     │  │ Warnings     │  │ Info         │          │
│ │              │  │              │  │              │          │
│ │   1          │  │   2          │  │   5          │          │
│ │ 🔴 Urgent    │  │ 🟡 Monitor   │  │ 🔵 FYI       │          │
│ └──────────────┘  └──────────────┘  └──────────────┘          │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ Active Alerts:                                                  │
│                                                                 │
│ 🔴 CRITICAL: Cow #002 - Elevated temperature (39.8°C)          │
│    Animal: Daisy (Cow #002)                                    │
│    Issue: Temperature above normal threshold                   │
│    Recommended Action: Isolate animal, contact veterinarian    │
│    Time: 2 hours ago                                            │
│    [Mark Resolved] [Schedule Vet] [View History]               │
│                                                                 │
│ 🟡 WARNING: Goat #015 - Low activity (30% below normal)        │
│    Animal: Billy (Goat #015)                                   │
│    Issue: Activity level significantly reduced                 │
│    Recommended Action: Monitor closely, check for illness      │
│    Time: 1 hour ago                                             │
│    [Mark Resolved] [View Details] [View History]               │
│                                                                 │
│ 🟡 WARNING: Sensor S003 - Battery low (15%)                    │
│    Sensor: S003 (Goat #001)                                    │
│    Issue: Battery level below 20%                              │
│    Recommended Action: Replace battery or recharge             │
│    Time: 30 minutes ago                                         │
│    [Mark Resolved] [Order Replacement] [View Details]          │
│                                                                 │
│ 🔵 INFO: Vaccination due for 5 animals this week               │
│    Animals: Cows #3, #5, #7; Goats #12, #18                   │
│    Type: Foot and Mouth Disease                                │
│    Deadline: Friday, Dec 6                                     │
│    [Schedule Vaccination] [View Details]                       │
│                                                                 │
│ [View all alerts]                                               │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### **4. Reports Page**

#### **Purpose**
Comprehensive reports and analytics about farm performance.

#### **Report Types Available**

##### **A. Health Report**
- Overall health status by animal type
- Disease trends and patterns
- Vaccination compliance
- Treatment history
- Mortality rate

##### **B. Production Report**
- Weight gain trends
- Feed efficiency metrics
- Milk production (if applicable)
- Egg production (if applicable)
- Breeding success rate

##### **C. Financial Report**
- Feed costs vs. revenue
- Profitability by animal type
- Cost per animal
- Revenue projections
- ROI analysis

##### **D. Operational Report**
- Pasture utilization
- Feed consumption
- Sensor performance
- Labor hours
- Equipment status

##### **E. Compliance Report**
- Vaccination records
- Medical treatments
- Regulatory compliance
- Certifications
- Audit trail

#### **Report Layout**
```
┌─────────────────────────────────────────────────────────────────┐
│ Reports                                                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ Report Type: [Health ▼] Date Range: [Last 30 days ▼]          │
│ [Download PDF] [Print] [Email] [Share]                         │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ Health Report - Last 30 Days                                    │
│                                                                 │
│ Executive Summary:                                              │
│ • Total Animals: 247                                            │
│ • Healthy: 235 (95%)                                            │
│ • With Issues: 12 (5%)                                          │
│ • Mortality: 0                                                  │
│ • Vaccination Compliance: 98%                                   │
│                                                                 │
│ Health Trends:                                                  │
│ [Line chart showing health status over 30 days]                │
│                                                                 │
│ Top Issues This Month:                                          │
│ 1. Low activity in 3 animals (2%)                               │
│ 2. Elevated temperature in 2 animals (1%)                       │
│ 3. Sensor battery low in 1 device (0.2%)                        │
│                                                                 │
│ Recommendations:                                                │
│ • Schedule veterinary visit for animals with low activity       │
│ • Replace sensor battery in S003                                │
│ • Continue current vaccination schedule                         │
│                                                                 │
│ [View Detailed Data] [Export to Excel] [Print Report]          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### **5. Marketplace Page**

#### **Purpose**
Connect farmers with services and products they need.

#### **Available Services**

##### **A. Veterinary Services**
```
┌─────────────────────────────────────────────────────────────────┐
│ Veterinary Services                                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ Dr. Sarah Johnson, DVM                                          │
│ ⭐⭐⭐⭐⭐ (4.9/5 - 127 reviews)                                  │
│ 📍 2 miles away                                                 │
│ 📞 (555) 987-6543                                               │
│ 💰 $75/visit                                                    │
│                                                                 │
│ Services: Health screening, Vaccinations, Emergency care       │
│ Availability: Mon-Sat, 8am-6pm                                 │
│                                                                 │
│ [Schedule Appointment] [View Profile] [Message]                │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

##### **B. Feed & Supplies**
```
┌─────────────────────────────────────────────────────────────────┐
│ Feed & Supplies                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ Premium Mixed Grain (500kg bag)                                 │
│ 💰 $45/bag (was $50)                                            │
│ ⭐⭐⭐⭐⭐ (4.8/5 - 342 reviews)                                  │
│ 📦 In stock                                                     │
│ 🚚 Free delivery on orders > $200                               │
│                                                                 │
│ [Add to Cart] [View Details] [View Seller]                     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

##### **C. Equipment & Services**
```
┌─────────────────────────────────────────────────────────────────┐
│ Equipment & Services                                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ Sensor Battery Replacement Service                              │
│ 💰 $15/battery (includes installation)                          │
│ ⭐⭐⭐⭐⭐ (4.9/5 - 89 reviews)                                   │
│ 📍 Available in your area                                       │
│ ⏱️ Same-day service available                                   │
│                                                                 │
│ [Schedule Service] [View Details] [Contact Provider]           │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

##### **D. Training & Consulting**
```
┌─────────────────────────────────────────────────────────────────┐
│ Training & Consulting                                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ Livestock Management Masterclass                                │
│ 💰 $299 (one-time access)                                       │
│ ⭐⭐⭐⭐⭐ (4.9/5 - 234 reviews)                                  │
│ 📚 12 modules, 40+ hours of content                             │
│ 🎓 Certificate upon completion                                  │
│                                                                 │
│ [Enroll Now] [Preview Course] [View Instructor]                │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### **6. Settings & Profile Page**

#### **Purpose**
Manage account, farm, and notification preferences.

#### **Settings Sections**

##### **A. Profile Settings**
- Name, email, phone
- Profile picture
- Password change
- Two-factor authentication

##### **B. Farm Settings**
- Farm name and location
- Farm size and type
- Contact information
- Team members and permissions

##### **C. Notification Preferences**
- Email notifications
- SMS alerts
- In-app notifications
- Alert frequency and thresholds

##### **D. Subscription & Billing**
- Current plan
- Billing history
- Payment methods
- Invoice download

##### **E. Integration Settings**
- Connected devices
- API keys
- Third-party integrations
- Data export options

---

## 🎯 Customer Portal Features

### **1. Real-Time Monitoring**
- Live health metrics for all animals
- Instant alerts and notifications
- Real-time sensor data
- Activity feeds

### **2. Data & Analytics**
- Customizable reports
- Performance trends
- Comparative analytics
- Predictive insights

### **3. Task Management**
- Automated reminders
- Scheduling tools
- Task tracking
- Calendar integration

### **4. Communication**
- In-app messaging with support
- Veterinary consultation booking
- Community forum access
- Educational resources

### **5. Marketplace Integration**
- Service provider directory
- Product ordering
- Vendor reviews and ratings
- Integrated payment system

### **6. Mobile Access**
- Responsive design
- Native mobile app
- Offline capabilities
- Push notifications

---

## 📱 Mobile Customer Portal

### **Mobile Dashboard**
```
┌─────────────────────────┐
│ ☰  🐄 Livemo    👤     │
├─────────────────────────┤
│                         │
│  ┌─────────────────┐    │
│  │ Total Animals   │    │
│  │      247        │    │
│  └─────────────────┘    │
│                         │
│  ┌─────────────────┐    │
│  │ Healthy Animals │    │
│  │    235 (95%)    │    │
│  └─────────────────┘    │
│                         │
│  ┌─────────────────┐    │
│  │ Active Alerts   │    │
│  │       3         │    │
│  └─────────────────┘    │
│                         │
│  ┌─────────────────┐    │
│  │ Recent Activity │    │
│  │ • Vaccination   │    │
│  │ • Feed delivery │    │
│  │ • Health check  │    │
│  └─────────────────┘    │
│                         │
│ ┌─────────────────────┐ │
│ │ 🏠 🐄 🏥 📊 ⚙️   │ │
│ │ Home Animals Health │ │
│ └─────────────────────┘ │
└─────────────────────────┘
```

---

## 🎨 Customer Portal Design Principles

### **1. Simplicity & Clarity**
- Focus on essential information
- Clear call-to-action buttons
- Intuitive navigation
- Minimal clutter

### **2. Actionability**
- Quick actions prominently displayed
- One-click task completion
- Clear next steps
- Contextual help

### **3. Personalization**
- Customizable dashboard
- Saved preferences
- Personalized recommendations
- Relevant alerts only

### **4. Trust & Transparency**
- Clear data ownership
- Privacy controls
- Transparent pricing
- Honest metrics

### **5. Mobile-First**
- Responsive design
- Touch-friendly interface
- Fast loading
- Offline support

---

## 🔄 Customer Portal Workflow

### **Typical User Journey**

#### **Morning Check (5 minutes)**
1. Open Livemo dashboard
2. Review overnight alerts
3. Check animal health status
4. View today's tasks
5. Schedule any needed actions

#### **Midday Update (3 minutes)**
1. Check real-time health metrics
2. Review new alerts
3. Confirm task completion
4. Note any observations

#### **Evening Review (10 minutes)**
1. Review daily activity log
2. Check all alerts resolved
3. Plan next day's tasks
4. Export daily report if needed

#### **Weekly Planning (30 minutes)**
1. Review weekly health report
2. Analyze performance trends
3. Plan breeding/feeding adjustments
4. Schedule veterinary visits
5. Review marketplace for supplies

#### **Monthly Analysis (1 hour)**
1. Review comprehensive monthly report
2. Analyze profitability
3. Plan operational improvements
4. Update farm strategies
5. Schedule team meetings

---

## 💰 Customer Portal Value Proposition

### **For Livestock Owners**
- **Save Time:** Automated monitoring vs. manual checks
- **Save Money:** Optimize feed, reduce losses, improve efficiency
- **Improve Health:** Early detection, better care decisions
- **Increase Profits:** Data-driven management
- **Peace of Mind:** 24/7 monitoring and alerts

### **Key Benefits**
- **15-25% Feed Cost Reduction**
- **30-40% Veterinary Cost Reduction**
- **50-70% Loss Prevention**
- **10-20% Production Increase**
- **200-300% ROI in 12 months**

---

## 🚀 Customer Portal Implementation Roadmap

### **Phase 1: Core Features (Weeks 1-4)**
- Dashboard with key metrics
- Animal management
- Basic alerts
- Mobile responsiveness

### **Phase 2: Advanced Features (Weeks 5-8)**
- Detailed reports
- Marketplace integration
- Task scheduling
- API integrations

### **Phase 3: Optimization (Weeks 9-12)**
- Performance optimization
- Mobile app launch
- Community features
- Advanced analytics

### **Phase 4: Expansion (Weeks 13+)**
- Multi-farm management
- Team collaboration
- Advanced integrations
- International support

---

**Customer Portal Version:** 1.0  
**Last Updated:** December 2, 2025 00:08 UTC+02:00  
**Platform:** Livemo (Livestock Monitor)  
**Target Users:** Livestock Owners, Farm Managers, Pasture Operators


# Livemo UI Mockup & Design Specification

**Platform:** Livemo (Livestock Monitor)  
**Design Inspiration:** Modern dashboard layouts with clean, professional interface  
**Color Scheme:** Umber, Cafe au lait, Amber brown with white backgrounds  
**Layout Pattern:** Sidebar navigation + Main content area

---

## 🎨 Overall Layout Structure

### **Main Dashboard Layout**
```
┌─────────────────────────────────────────────────────────────────┐
│                         Top Navigation Bar                       │
│  [Search] [Notifications] [Chats] [User Profile] [Settings]    │
├──────────────┬──────────────────────────────────────────────────┤
│              │                                                  │
│   SIDEBAR    │              MAIN CONTENT AREA                   │
│              │                                                  │
│  [Logo]      │  ┌────────────────────────────────────────────┐ │
│              │  │  Page Title              [Filters] [Export] │ │
│  [Menu]      │  ├────────────────────────────────────────────┤ │
│  [Dashboard] │  │                                            │ │
│  [Animals]   │  │   Stats Cards (4 columns)                  │ │
│  [Health]    │  │   ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐    │ │
│  [Sensors]   │  │   │ Stat │ │ Stat │ │ Stat │ │ Stat │    │ │
│  [Feed]      │  │   └──────┘ └──────┘ └──────┘ └──────┘    │ │
│  [Pasture]   │  │                                            │ │
│  [Reports]   │  │   Charts Section (2 columns)              │ │
│  [Settings]  │  │   ┌──────────────────┐ ┌──────────────┐   │ │
│              │  │   │   Bar Chart      │ │  Pie Chart   │   │ │
│              │  │   └──────────────────┘ └──────────────┘   │ │
│              │  │                                            │ │
│              │  │   Data Tables / Lists                      │ │
│              │  │   ┌────────────────────────────────────┐  │ │
│              │  │   │ Table with data                    │  │ │
│              │  │   └────────────────────────────────────┘  │ │
│              │  └────────────────────────────────────────────┘ │
└──────────────┴──────────────────────────────────────────────────┘
```

---

## 🎯 Sidebar Navigation Design

### **Sidebar Structure**
```
┌──────────────────┐
│   🐄 LIVEMO      │  ← Logo/Brand
├──────────────────┤
│                  │
│ 📊 Dashboard     │  ← Main navigation items
│ 🐄 Animals       │
│ 🏥 Health        │
│ 📡 Sensors       │
│ 🌾 Feed          │
│ 🗺️  Pasture      │
│ 📈 Reports       │
│                  │
├──────────────────┤
│ ⚙️  Settings     │  ← Secondary items
│ ❓ Help          │
│ 📞 Support       │
└──────────────────┘
```

### **Sidebar Styling**
- **Background:** Umber (#4A3C28) or dark variant
- **Text:** White or light gray
- **Active Item:** Cafe au lait (#C8B88B) highlight
- **Icons:** Material Design icons
- **Width:** 280px (collapsible to 80px on mobile)

---

## 📊 Dashboard Overview Page

### **Page Structure**

#### **1. Top Section - Stats Cards**
```
┌────────────────────────────────────────────────────────────────┐
│ Last 7 days ▼  Download ⋮                                      │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │
│  │ Total        │  │ Healthy      │  │ Alerts       │         │
│  │ Animals      │  │ Animals      │  │ Today        │         │
│  │              │  │              │  │              │         │
│  │   247        │  │   235        │  │   3          │         │
│  │ +5 this week │  │ +12 this week│  │ -2 yesterday │         │
│  └──────────────┘  └──────────────┘  └──────────────┘         │
│                                                                │
│  ┌──────────────┐                                              │
│  │ Feed         │                                              │
│  │ Efficiency   │                                              │
│  │              │                                              │
│  │   94%        │                                              │
│  │ +3% this week│                                              │
│  └──────────────┘                                              │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

#### **2. Charts Section - Health Trends**
```
┌────────────────────────────────────────────────────────────────┐
│ Health Status by Category                                      │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  40 │     ╱╲                                                   │
│     │    ╱  ╲      ╱╲                                          │
│  30 │   ╱    ╲    ╱  ╲      ╱╲                                │
│     │  ╱      ╲  ╱    ╲    ╱  ╲                               │
│  20 │ ╱        ╲╱      ╲  ╱    ╲                              │
│     │                   ╲╱      ╲                             │
│  10 │                          ╲                              │
│     │                           ╲                             │
│   0 └─────────────────────────────────────────────────────    │
│     Mon    Tue    Wed    Thu    Fri    Sat    Sun             │
│                                                                │
│  Legend: ─ Cattle  ─ Goats  ─ Poultry  ─ Swine               │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

#### **3. Performance Metrics - Top Animals**
```
┌────────────────────────────────────────────────────────────────┐
│ Top Performing Animals                                         │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│ Name              │ Type    │ Health │ Weight │ Status        │
│ ─────────────────┼─────────┼────────┼────────┼──────────────│
│ 🐄 Bessie        │ Cattle  │  98%   │ 650kg  │ ✓ Excellent  │
│ 🐐 Billy         │ Goat    │  95%   │ 85kg   │ ✓ Excellent  │
│ 🐔 Henny         │ Poultry │  92%   │ 2.5kg  │ ✓ Good       │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

#### **4. Recent Activities**
```
┌────────────────────────────────────────────────────────────────┐
│ Recent Activities                                              │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│ • Cow #123 - Vaccination completed                 2 hours ago│
│ • Goat #45 - Health alert: Low activity            1 hour ago │
│ • Feed schedule updated for Pasture A              30 min ago  │
│ • Sensor #S001 - Battery low (15%)                 15 min ago  │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

## 🐄 Animals Management Page

### **Page Structure**

#### **1. Header with Filters**
```
┌────────────────────────────────────────────────────────────────┐
│ Animals Management                    [+ Add Animal] [Filters] │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│ [Search] [Filter by Type ▼] [Filter by Status ▼] [Export]    │
│                                                                │
│ Showing: 🐄 Cattle (45) | 🐐 Goats (67) | 🐔 Poultry (120)   │
│          🐷 Swine (15) | 🐑 Sheep (23) | 🐴 Horses (5)       │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

#### **2. Animals Table**
```
┌────────────────────────────────────────────────────────────────┐
│ ID    │ Type   │ Name    │ Status  │ Health │ Weight │ Actions│
├────────────────────────────────────────────────────────────────┤
│ #001  │ 🐄 Cow │ Bessie  │ Healthy │ 98%    │ 650kg  │ ⋮     │
│ #002  │ 🐄 Cow │ Daisy   │ Alert   │ 78%    │ 620kg  │ ⋮     │
│ #003  │ 🐐 Goat│ Billy   │ Healthy │ 92%    │ 85kg   │ ⋮     │
│ #004  │ 🐔 Hen │ Henny   │ Healthy │ 95%    │ 2.5kg  │ ⋮     │
│ #005  │ 🐷 Pig │ Porky   │ Healthy │ 88%    │ 120kg  │ ⋮     │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

## 🏥 Health Monitoring Page

### **Page Structure**

#### **1. Health Overview Cards**
```
┌────────────────────────────────────────────────────────────────┐
│ Health Monitoring                                              │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │
│  │ Temperature  │  │ Heart Rate   │  │ Activity     │         │
│  │              │  │              │  │              │         │
│  │ 38.5°C       │  │ 65 bpm       │  │ 45%          │         │
│  │ 🟢 Normal    │  │ 🟢 Normal    │  │ 🟡 Low       │         │
│  └──────────────┘  └──────────────┘  └──────────────┘         │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

#### **2. Health Alerts Section**
```
┌────────────────────────────────────────────────────────────────┐
│ Active Health Alerts                                           │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│ 🚨 CRITICAL: Cow #002 - Elevated temperature (39.8°C)         │
│    Action: Isolate animal, contact veterinarian               │
│                                                                │
│ ⚠️  WARNING: Goat #015 - Reduced activity (30% below normal)   │
│    Action: Monitor closely, check for illness                 │
│                                                                │
│ 📋 INFO: Vaccination due for 5 animals this week              │
│    Action: Schedule vaccination appointments                  │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

#### **3. Individual Animal Health Details**
```
┌────────────────────────────────────────────────────────────────┐
│ Animal: Cow #001 (Bessie)                                      │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│ Health Metrics:                                                │
│ ├─ Temperature: 38.5°C (Normal)                               │
│ ├─ Heart Rate: 65 bpm (Normal)                                │
│ ├─ Activity Level: 85% (Good)                                 │
│ ├─ Last Feeding: 2 hours ago                                  │
│ ├─ Last Vaccination: 30 days ago                              │
│ └─ Weight Trend: ↑ +2kg this week                             │
│                                                                │
│ Recent Health Events:                                          │
│ • 2024-12-01: Vaccination - Foot and Mouth                   │
│ • 2024-11-28: Weight check - 650kg                            │
│ • 2024-11-25: Health screening - All normal                   │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

## 📡 Sensor Management Page

### **Page Structure**

#### **1. Sensor Status Overview**
```
┌────────────────────────────────────────────────────────────────┐
│ Sensor Management                         [+ Add Sensor]       │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │
│  │ Active       │  │ Inactive     │  │ Issues       │         │
│  │ Sensors      │  │ Sensors      │  │ Detected     │         │
│  │              │  │              │  │              │         │
│  │   42         │  │   3          │  │   2          │         │
│  │ 🟢 All good  │  │ ⚠️ Needs fix │  │ 🔴 Critical  │         │
│  └──────────────┘  └──────────────┘  └──────────────┘         │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

#### **2. Sensor Status Table**
```
┌────────────────────────────────────────────────────────────────┐
│ Sensor ID │ Animal  │ Type    │ Battery │ Status    │ Actions │
├────────────────────────────────────────────────────────────────┤
│ S001      │ Cow #1  │ Health  │ 85%     │ 🟢 Active │ ⋮      │
│ S002      │ Cow #2  │ GPS     │ 92%     │ 🟢 Active │ ⋮      │
│ S003      │ Goat #1 │ Health  │ 15%     │ 🔴 Low Bat│ ⋮      │
│ S004      │ Hen #5  │ Health  │ 45%     │ 🟡 Medium │ ⋮      │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

## 📈 Reports Page

### **Page Structure**

#### **1. Report Type Tabs**
```
┌────────────────────────────────────────────────────────────────┐
│ Reports                                                        │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│ [Overview] [Health] [Performance] [Financial] [Compliance]    │
│                                                                │
│ Date Range: [Last 7 days ▼] [Download] [Print]               │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

#### **2. Report Content Example - Overview**
```
┌────────────────────────────────────────────────────────────────┐
│ Overview Report - Last 7 Days                                  │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│ Summary Statistics:                                            │
│ • Total Animals: 247                                           │
│ • Healthy Animals: 235 (95%)                                   │
│ • Animals with Alerts: 12 (5%)                                │
│ • Feed Efficiency: 94%                                         │
│ • Mortality Rate: 0%                                           │
│                                                                │
│ Key Metrics Chart:                                             │
│ [Line chart showing trends over 7 days]                       │
│                                                                │
│ Top Issues This Week:                                          │
│ 1. Low activity in 3 animals                                   │
│ 2. Elevated temperature in 2 animals                           │
│ 3. Sensor battery low in 1 device                              │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

## ⚙️ Settings Page

### **Page Structure**

#### **1. Settings Navigation**
```
┌────────────────────────────────────────────────────────────────┐
│ Settings                                                       │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│ [Profile] [Farm] [Alerts] [Notifications] [API] [Security]    │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

#### **2. Settings Content Example - Alerts**
```
┌────────────────────────────────────────────────────────────────┐
│ Alert Settings                                                 │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│ Temperature Alerts:                                            │
│ ├─ High Temperature Threshold: [40.5°C]                       │
│ ├─ Low Temperature Threshold: [36.0°C]                        │
│ └─ Alert Frequency: [Immediate]                               │
│                                                                │
│ Heart Rate Alerts:                                             │
│ ├─ High Heart Rate Threshold: [120 bpm]                       │
│ ├─ Low Heart Rate Threshold: [40 bpm]                         │
│ └─ Alert Frequency: [Immediate]                               │
│                                                                │
│ Activity Alerts:                                               │
│ ├─ Low Activity Threshold: [30%]                              │
│ └─ Alert Frequency: [Every 2 hours]                           │
│                                                                │
│ [Save Changes] [Reset to Defaults]                            │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

## 🎨 Component Specifications

### **1. Stats Card Component**
```jsx
<Card elevation={3}>
  <CardContent>
    <Box display="flex" justifyContent="space-between" alignItems="flex-start">
      <Box>
        <Typography color="textSecondary" gutterBottom>
          Total Animals
        </Typography>
        <Typography variant="h3" color="primary">
          247
        </Typography>
        <Typography variant="body2" color="success.main">
          +5 this week
        </Typography>
      </Box>
      <Avatar sx={{ bgcolor: 'primary.main', width: 56, height: 56 }}>
        <PetsIcon />
      </Avatar>
    </Box>
  </CardContent>
</Card>
```

### **2. Health Status Chip Component**
```jsx
<Box display="flex" alignItems="center" gap={1}>
  <Chip
    label="Healthy"
    color="success"
    variant="outlined"
    size="small"
  />
  <LinearProgress
    variant="determinate"
    value={98}
    sx={{ width: 100 }}
  />
  <Typography variant="body2">98%</Typography>
</Box>
```

### **3. Alert Component**
```jsx
<Alert severity="warning" sx={{ mb: 2 }}>
  <AlertTitle>Low Activity Detected</AlertTitle>
  Goat #015 activity is 30% below normal. Monitor closely for signs of illness.
  <Box sx={{ mt: 1 }}>
    <Button size="small" variant="outlined">
      View Details
    </Button>
  </Box>
</Alert>
```

### **4. Data Table Component**
```jsx
<TableContainer component={Paper}>
  <Table>
    <TableHead sx={{ bgcolor: 'primary.main' }}>
      <TableRow>
        <TableCell sx={{ color: 'white' }}>ID</TableCell>
        <TableCell sx={{ color: 'white' }}>Type</TableCell>
        <TableCell sx={{ color: 'white' }}>Name</TableCell>
        <TableCell sx={{ color: 'white' }}>Status</TableCell>
        <TableCell sx={{ color: 'white' }}>Health</TableCell>
        <TableCell sx={{ color: 'white' }}>Actions</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {/* Table rows */}
    </TableBody>
  </Table>
</TableContainer>
```

---

## 📱 Mobile Responsive Design

### **Mobile Dashboard Layout**
```
┌─────────────────────────┐
│ ☰  🐄 Livemo    👤     │
├─────────────────────────┤
│                         │
│  ┌─────────────────┐    │
│  │   Stats Card    │    │
│  └─────────────────┘    │
│                         │
│  ┌─────────────────┐    │
│  │   Stats Card    │    │
│  └─────────────────┘    │
│                         │
│  ┌─────────────────┐    │
│  │   Chart         │    │
│  └─────────────────┘    │
│                         │
│  ┌─────────────────┐    │
│  │   List Items    │    │
│  └─────────────────┘    │
│                         │
│ ┌─────────────────────┐ │
│ │ 🏠 🐄 🏥 📊 ⚙️   │ │
│ │ Home Animals Health │ │
│ └─────────────────────┘ │
└─────────────────────────┘
```

---

## 🎯 Design Principles

### **1. Visual Hierarchy**
- **Primary Actions:** Black buttons, prominent placement
- **Secondary Actions:** Amber brown buttons, secondary placement
- **Information:** Organized in cards with clear sections
- **Status:** Color-coded (green=healthy, orange=warning, red=critical)

### **2. Consistency**
- **Spacing:** 8px, 16px, 24px, 32px grid
- **Border Radius:** 12px for cards, 8px for buttons
- **Typography:** Roboto font family with clear hierarchy
- **Colors:** Umber primary, Cafe au lait secondary, earth tones for status

### **3. Usability**
- **Scanability:** Clear sections with headers
- **Accessibility:** High contrast, keyboard navigation
- **Responsiveness:** Works on all screen sizes
- **Performance:** Fast loading, smooth interactions

### **4. Livestock-Specific Design**
- **Animal Icons:** Emojis for quick identification
- **Health Indicators:** Visual progress bars and status chips
- **Real-time Data:** Live updates with timestamps
- **Actionable Alerts:** Clear call-to-action buttons

---

## 🚀 Implementation Notes

### **Frontend Components to Build**
1. **Layout Components**
   - Sidebar navigation
   - Top navigation bar
   - Main content wrapper

2. **Dashboard Components**
   - Stats cards
   - Chart components (line, bar, pie)
   - Activity feed
   - Recent activities list

3. **Data Components**
   - Data tables with sorting/filtering
   - Animal cards
   - Health status indicators
   - Alert components

4. **Form Components**
   - Add animal form
   - Settings forms
   - Filter components
   - Search bar

5. **Utility Components**
   - Modals/Dialogs
   - Dropdowns
   - Date pickers
   - Status badges

---

**Design System Version:** 2.0  
**Last Updated:** December 2, 2025 00:05 UTC+02:00  
**Platform:** Livemo (Livestock Monitor)  
**Design Inspiration:** Modern dashboard patterns with livestock focus


# Livemo Customer Portal - Design & Specification

**Portal Name:** Livemo Customer Dashboard  
**Target Users:** Livestock Owners, Pasture Managers, Farm Operators  
**Purpose:** Self-service livestock monitoring and farm management  
**Design Pattern:** Customer-focused dashboard with key metrics and actions

---

## 🎯 Customer Portal Overview

The Livemo Customer Portal is a dedicated interface for livestock owners to:
- **Monitor** their animals' health in real-time
- **Manage** their farm operations and schedules
- **Access** reports and insights about their livestock
- **Receive** alerts and notifications
- **Plan** breeding, feeding, and pasture rotation
- **Track** costs and profitability

---

## 🏗️ Customer Portal Layout

### **Header Navigation**
```
┌─────────────────────────────────────────────────────────────────┐
│ 🐄 LIVEMO                                                       │
│ [Dashboard] [My Animals] [Health] [Reports] [Marketplace]      │
│                                [Online Tour] [Help] [John Doe ▼]│
└─────────────────────────────────────────────────────────────────┘
```

### **Main Dashboard Layout**
```
┌─────────────────────────────────────────────────────────────────┐
│ Your Farm at a Glance                    [View all insights]    │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │ Total        │  │ Healthy      │  │ Alerts       │          │
│  │ Animals      │  │ Animals      │  │ This Week    │          │
│  │              │  │              │  │              │          │
│  │   247        │  │   235 (95%)  │  │   3          │          │
│  │ +5 this week │  │ +12 this week│  │ -2 yesterday │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
│                                                                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │ Feed         │  │ Pasture      │  │ Revenue      │          │
│  │ Efficiency   │  │ Utilization  │  │ This Month   │          │
│  │              │  │              │  │              │          │
│  │   94%        │  │   78%        │  │ $12,450      │          │
│  │ +3% this week│  │ +5% this week│  │ +8% vs last  │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 📊 Customer Portal Pages

### **1. Dashboard - "Your Farm at a Glance"**

#### **Purpose**
Quick overview of farm status and key metrics at a single glance.

#### **Key Sections**

##### **A. Quick Stats Cards (6 cards)**
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │ Total        │  │ Healthy      │  │ Alerts       │          │
│  │ Animals      │  │ Animals      │  │ This Week    │          │
│  │              │  │              │  │              │          │
│  │   247        │  │   235 (95%)  │  │   3          │          │
│  │ 🐄 🐐 🐔 🐷  │  │ ✓ Excellent  │  │ 🚨 Urgent    │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
│                                                                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │ Feed         │  │ Pasture      │  │ Revenue      │          │
│  │ Efficiency   │  │ Utilization  │  │ This Month   │          │
│  │              │  │              │  │              │          │
│  │   94%        │  │   78%        │  │ $12,450      │          │
│  │ ↑ +3% week   │  │ ↑ +5% week   │  │ ↑ +8% vs last│          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Metrics Shown:**
- Total Animals (by type breakdown)
- Healthy Animals (percentage and count)
- Active Alerts (count and severity)
- Feed Efficiency (percentage)
- Pasture Utilization (percentage)
- Monthly Revenue (estimated)

##### **B. Quick Actions Section**
```
┌─────────────────────────────────────────────────────────────────┐
│ Quick Actions                                                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ [+ Add Animal] [Schedule Feeding] [Plan Breeding] [View Alerts]│
│ [Export Report] [Contact Support] [Book Vet] [View Marketplace]│
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

##### **C. Health Status by Category**
```
┌─────────────────────────────────────────────────────────────────┐
│ Health Status by Category                                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ 🐄 Cattle:    235/245 healthy (96%)  ████████░                │
│ 🐐 Goats:     67/70 healthy (96%)    ████████░                │
│ 🐔 Poultry:   120/125 healthy (96%)  ████████░                │
│ 🐷 Swine:     15/15 healthy (100%)   ██████████               │
│ 🐑 Sheep:     23/23 healthy (100%)   ██████████               │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

##### **D. Recent Alerts & Activities**
```
┌─────────────────────────────────────────────────────────────────┐
│ Recent Alerts & Activities                                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ 🚨 URGENT: Cow #002 - Elevated temperature (39.8°C)            │
│    Action needed: Isolate and contact veterinarian             │
│    Time: 2 hours ago                                            │
│                                                                 │
│ ⚠️  WARNING: Goat #015 - Low activity (30% below normal)        │
│    Action needed: Monitor closely for illness                  │
│    Time: 1 hour ago                                             │
│                                                                 │
│ 📋 INFO: Feed delivery scheduled for tomorrow                   │
│    Quantity: 500kg mixed grain                                  │
│    Time: 9:00 AM                                                │
│                                                                 │
│ ✓ Vaccination completed for 5 animals                           │
│    Type: Foot and Mouth Disease                                │
│    Time: Yesterday                                              │
│                                                                 │
│ [View all alerts]                                               │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

##### **E. Upcoming Tasks & Schedules**
```
┌─────────────────────────────────────────────────────────────────┐
│ Upcoming Tasks & Schedules                                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ 📅 Today:                                                       │
│    • Morning feeding - 8:00 AM                                 │
│    • Health check - Pasture A                                  │
│    • Sensor battery check                                      │
│                                                                 │
│ 📅 Tomorrow:                                                    │
│    • Feed delivery - 9:00 AM (500kg)                           │
│    • Pasture rotation - Move cattle to Pasture B               │
│    • Breeding check - Goat #23                                 │
│                                                                 │
│ 📅 This Week:                                                   │
│    • Vaccination - 3 animals (Wed)                             │
│    • Veterinary visit - Health screening (Fri)                 │
│    • Weight check - All animals (Sat)                          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

##### **F. Your Farm Info Card**
```
┌─────────────────────────────────────────────────────────────────┐
│ Your Farm                                                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ 🏡 Green Valley Farm                                            │
│    Location: 5 miles away                                       │
│    Phone: (555) 123-4567                                        │
│    Email: john@greenvalleyfarm.com                              │
│                                                                 │
│ 📊 Farm Statistics:                                             │
│    • Total Pastures: 5                                          │
│    • Total Animals: 247                                         │
│    • Active Sensors: 42                                         │
│    • Member Since: Jan 2024                                     │
│                                                                 │
│ [Edit Farm Info] [View Farm Map] [Manage Team]                 │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### **2. My Animals Page**

#### **Purpose**
Detailed view and management of all livestock with filtering and search.

#### **Layout**
```
┌─────────────────────────────────────────────────────────────────┐
│ My Animals                                [+ Add Animal] [Export]│
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ [Search by name...] [Filter by Type ▼] [Filter by Status ▼]   │
│                                                                 │
│ Category Tabs:                                                  │
│ [All (247)] [🐄 Cattle (45)] [🐐 Goats (67)] [🐔 Poultry (120)]│
│ [🐷 Swine (15)] [🐑 Sheep (23)] [🐴 Horses (5)]                │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ Animal Cards (Grid View):                                       │
│                                                                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │ 🐄 Bessie    │  │ 🐄 Daisy     │  │ 🐐 Billy     │          │
│  │ Cow #001     │  │ Cow #002     │  │ Goat #045    │          │
│  │              │  │              │  │              │          │
│  │ Health: 98%  │  │ Health: 78%  │  │ Health: 92%  │          │
│  │ Weight: 650kg│  │ Weight: 620kg│  │ Weight: 85kg │          │
│  │ Status: ✓    │  │ Status: ⚠️   │  │ Status: ✓    │          │
│  │ [View]       │  │ [View]       │  │ [View]       │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
│                                                                 │
│  [Show more animals...]                                         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

#### **Individual Animal Detail View**
```
┌─────────────────────────────────────────────────────────────────┐
│ 🐄 Bessie (Cow #001)                    [Edit] [Health] [More ▼]│
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ Basic Information:                                              │
│ ├─ Type: Dairy Cattle                                          │
│ ├─ Breed: Holstein                                             │
│ ├─ Age: 4 years                                                │
│ ├─ Weight: 650kg                                               │
│ ├─ Date Added: Jan 15, 2024                                    │
│ └─ Status: Healthy ✓                                           │
│                                                                 │
│ Current Health Metrics:                                         │
│ ├─ Temperature: 38.5°C (Normal) 🟢                             │
│ ├─ Heart Rate: 65 bpm (Normal) 🟢                              │
│ ├─ Activity Level: 85% (Good) 🟢                               │
│ ├─ Last Feeding: 2 hours ago                                   │
│ ├─ Last Vaccination: 30 days ago                               │
│ └─ Weight Trend: ↑ +2kg this week                              │
│                                                                 │
│ Assigned Sensor:                                                │
│ ├─ Sensor ID: S001                                             │
│ ├─ Battery: 85%                                                │
│ ├─ Last Update: 5 minutes ago                                  │
│ └─ Status: Active 🟢                                           │
│                                                                 │
│ Breeding Information:                                           │
│ ├─ Last Heat Cycle: 15 days ago                                │
│ ├─ Breeding Status: Ready                                      │
│ ├─ Pregnancy Status: Not pregnant                              │
│ └─ Next Expected Heat: 5 days                                  │
│                                                                 │
│ Recent Health Events:                                           │
│ • 2024-12-01: Vaccination - Foot and Mouth                    │
│ • 2024-11-28: Weight check - 650kg                             │
│ • 2024-11-25: Health screening - All normal                    │
│                                                                 │
│ [Schedule Vet Visit] [Update Health] [View Full History]       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### **3. Health & Alerts Page**

#### **Purpose**
Centralized view of all health issues and alerts requiring attention.

#### **Layout**
```
┌─────────────────────────────────────────────────────────────────┐
│ Health & Alerts                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ Alert Summary:                                                  │
│ ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│ │ Critical     │  │ Warnings     │  │ Info         │          │
│ │              │  │              │  │              │          │
│ │   1          │  │   2          │  │   5          │          │
│ │ 🔴 Urgent    │  │ 🟡 Monitor   │  │ 🔵 FYI       │          │
│ └──────────────┘  └──────────────┘  └──────────────┘          │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ Active Alerts:                                                  │
│                                                                 │
│ 🔴 CRITICAL: Cow #002 - Elevated temperature (39.8°C)          │
│    Animal: Daisy (Cow #002)                                    │
│    Issue: Temperature above normal threshold                   │
│    Recommended Action: Isolate animal, contact veterinarian    │
│    Time: 2 hours ago                                            │
│    [Mark Resolved] [Schedule Vet] [View History]               │
│                                                                 │
│ 🟡 WARNING: Goat #015 - Low activity (30% below normal)        │
│    Animal: Billy (Goat #015)                                   │
│    Issue: Activity level significantly reduced                 │
│    Recommended Action: Monitor closely, check for illness      │
│    Time: 1 hour ago                                             │
│    [Mark Resolved] [View Details] [View History]               │
│                                                                 │
│ 🟡 WARNING: Sensor S003 - Battery low (15%)                    │
│    Sensor: S003 (Goat #001)                                    │
│    Issue: Battery level below 20%                              │
│    Recommended Action: Replace battery or recharge             │
│    Time: 30 minutes ago                                         │
│    [Mark Resolved] [Order Replacement] [View Details]          │
│                                                                 │
│ 🔵 INFO: Vaccination due for 5 animals this week               │
│    Animals: Cows #3, #5, #7; Goats #12, #18                   │
│    Type: Foot and Mouth Disease                                │
│    Deadline: Friday, Dec 6                                     │
│    [Schedule Vaccination] [View Details]                       │
│                                                                 │
│ [View all alerts]                                               │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### **4. Reports Page**

#### **Purpose**
Comprehensive reports and analytics about farm performance.

#### **Report Types Available**

##### **A. Health Report**
- Overall health status by animal type
- Disease trends and patterns
- Vaccination compliance
- Treatment history
- Mortality rate

##### **B. Production Report**
- Weight gain trends
- Feed efficiency metrics
- Milk production (if applicable)
- Egg production (if applicable)
- Breeding success rate

##### **C. Financial Report**
- Feed costs vs. revenue
- Profitability by animal type
- Cost per animal
- Revenue projections
- ROI analysis

##### **D. Operational Report**
- Pasture utilization
- Feed consumption
- Sensor performance
- Labor hours
- Equipment status

##### **E. Compliance Report**
- Vaccination records
- Medical treatments
- Regulatory compliance
- Certifications
- Audit trail

#### **Report Layout**
```
┌─────────────────────────────────────────────────────────────────┐
│ Reports                                                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ Report Type: [Health ▼] Date Range: [Last 30 days ▼]          │
│ [Download PDF] [Print] [Email] [Share]                         │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ Health Report - Last 30 Days                                    │
│                                                                 │
│ Executive Summary:                                              │
│ • Total Animals: 247                                            │
│ • Healthy: 235 (95%)                                            │
│ • With Issues: 12 (5%)                                          │
│ • Mortality: 0                                                  │
│ • Vaccination Compliance: 98%                                   │
│                                                                 │
│ Health Trends:                                                  │
│ [Line chart showing health status over 30 days]                │
│                                                                 │
│ Top Issues This Month:                                          │
│ 1. Low activity in 3 animals (2%)                               │
│ 2. Elevated temperature in 2 animals (1%)                       │
│ 3. Sensor battery low in 1 device (0.2%)                        │
│                                                                 │
│ Recommendations:                                                │
│ • Schedule veterinary visit for animals with low activity       │
│ • Replace sensor battery in S003                                │
│ • Continue current vaccination schedule                         │
│                                                                 │
│ [View Detailed Data] [Export to Excel] [Print Report]          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### **5. Marketplace Page**

#### **Purpose**
Connect farmers with services and products they need.

#### **Available Services**

##### **A. Veterinary Services**
```
┌─────────────────────────────────────────────────────────────────┐
│ Veterinary Services                                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ Dr. Sarah Johnson, DVM                                          │
│ ⭐⭐⭐⭐⭐ (4.9/5 - 127 reviews)                                  │
│ 📍 2 miles away                                                 │
│ 📞 (555) 987-6543                                               │
│ 💰 $75/visit                                                    │
│                                                                 │
│ Services: Health screening, Vaccinations, Emergency care       │
│ Availability: Mon-Sat, 8am-6pm                                 │
│                                                                 │
│ [Schedule Appointment] [View Profile] [Message]                │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

##### **B. Feed & Supplies**
```
┌─────────────────────────────────────────────────────────────────┐
│ Feed & Supplies                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ Premium Mixed Grain (500kg bag)                                 │
│ 💰 $45/bag (was $50)                                            │
│ ⭐⭐⭐⭐⭐ (4.8/5 - 342 reviews)                                  │
│ 📦 In stock                                                     │
│ 🚚 Free delivery on orders > $200                               │
│                                                                 │
│ [Add to Cart] [View Details] [View Seller]                     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

##### **C. Equipment & Services**
```
┌─────────────────────────────────────────────────────────────────┐
│ Equipment & Services                                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ Sensor Battery Replacement Service                              │
│ 💰 $15/battery (includes installation)                          │
│ ⭐⭐⭐⭐⭐ (4.9/5 - 89 reviews)                                   │
│ 📍 Available in your area                                       │
│ ⏱️ Same-day service available                                   │
│                                                                 │
│ [Schedule Service] [View Details] [Contact Provider]           │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

##### **D. Training & Consulting**
```
┌─────────────────────────────────────────────────────────────────┐
│ Training & Consulting                                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ Livestock Management Masterclass                                │
│ 💰 $299 (one-time access)                                       │
│ ⭐⭐⭐⭐⭐ (4.9/5 - 234 reviews)                                  │
│ 📚 12 modules, 40+ hours of content                             │
│ 🎓 Certificate upon completion                                  │
│                                                                 │
│ [Enroll Now] [Preview Course] [View Instructor]                │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### **6. Settings & Profile Page**

#### **Purpose**
Manage account, farm, and notification preferences.

#### **Settings Sections**

##### **A. Profile Settings**
- Name, email, phone
- Profile picture
- Password change
- Two-factor authentication

##### **B. Farm Settings**
- Farm name and location
- Farm size and type
- Contact information
- Team members and permissions

##### **C. Notification Preferences**
- Email notifications
- SMS alerts
- In-app notifications
- Alert frequency and thresholds

##### **D. Subscription & Billing**
- Current plan
- Billing history
- Payment methods
- Invoice download

##### **E. Integration Settings**
- Connected devices
- API keys
- Third-party integrations
- Data export options

---

## 🎯 Customer Portal Features

### **1. Real-Time Monitoring**
- Live health metrics for all animals
- Instant alerts and notifications
- Real-time sensor data
- Activity feeds

### **2. Data & Analytics**
- Customizable reports
- Performance trends
- Comparative analytics
- Predictive insights

### **3. Task Management**
- Automated reminders
- Scheduling tools
- Task tracking
- Calendar integration

### **4. Communication**
- In-app messaging with support
- Veterinary consultation booking
- Community forum access
- Educational resources

### **5. Marketplace Integration**
- Service provider directory
- Product ordering
- Vendor reviews and ratings
- Integrated payment system

### **6. Mobile Access**
- Responsive design
- Native mobile app
- Offline capabilities
- Push notifications

---

## 📱 Mobile Customer Portal

### **Mobile Dashboard**
```
┌─────────────────────────┐
│ ☰  🐄 Livemo    👤     │
├─────────────────────────┤
│                         │
│  ┌─────────────────┐    │
│  │ Total Animals   │    │
│  │      247        │    │
│  └─────────────────┘    │
│                         │
│  ┌─────────────────┐    │
│  │ Healthy Animals │    │
│  │    235 (95%)    │    │
│  └─────────────────┘    │
│                         │
│  ┌─────────────────┐    │
│  │ Active Alerts   │    │
│  │       3         │    │
│  └─────────────────┘    │
│                         │
│  ┌─────────────────┐    │
│  │ Recent Activity │    │
│  │ • Vaccination   │    │
│  │ • Feed delivery │    │
│  │ • Health check  │    │
│  └─────────────────┘    │
│                         │
│ ┌─────────────────────┐ │
│ │ 🏠 🐄 🏥 📊 ⚙️   │ │
│ │ Home Animals Health │ │
│ └─────────────────────┘ │
└─────────────────────────┘
```

---

## 🎨 Customer Portal Design Principles

### **1. Simplicity & Clarity**
- Focus on essential information
- Clear call-to-action buttons
- Intuitive navigation
- Minimal clutter

### **2. Actionability**
- Quick actions prominently displayed
- One-click task completion
- Clear next steps
- Contextual help

### **3. Personalization**
- Customizable dashboard
- Saved preferences
- Personalized recommendations
- Relevant alerts only

### **4. Trust & Transparency**
- Clear data ownership
- Privacy controls
- Transparent pricing
- Honest metrics

### **5. Mobile-First**
- Responsive design
- Touch-friendly interface
- Fast loading
- Offline support

---

## 🔄 Customer Portal Workflow

### **Typical User Journey**

#### **Morning Check (5 minutes)**
1. Open Livemo dashboard
2. Review overnight alerts
3. Check animal health status
4. View today's tasks
5. Schedule any needed actions

#### **Midday Update (3 minutes)**
1. Check real-time health metrics
2. Review new alerts
3. Confirm task completion
4. Note any observations

#### **Evening Review (10 minutes)**
1. Review daily activity log
2. Check all alerts resolved
3. Plan next day's tasks
4. Export daily report if needed

#### **Weekly Planning (30 minutes)**
1. Review weekly health report
2. Analyze performance trends
3. Plan breeding/feeding adjustments
4. Schedule veterinary visits
5. Review marketplace for supplies

#### **Monthly Analysis (1 hour)**
1. Review comprehensive monthly report
2. Analyze profitability
3. Plan operational improvements
4. Update farm strategies
5. Schedule team meetings

---

## 💰 Customer Portal Value Proposition

### **For Livestock Owners**
- **Save Time:** Automated monitoring vs. manual checks
- **Save Money:** Optimize feed, reduce losses, improve efficiency
- **Improve Health:** Early detection, better care decisions
- **Increase Profits:** Data-driven management
- **Peace of Mind:** 24/7 monitoring and alerts

### **Key Benefits**
- **15-25% Feed Cost Reduction**
- **30-40% Veterinary Cost Reduction**
- **50-70% Loss Prevention**
- **10-20% Production Increase**
- **200-300% ROI in 12 months**

---

## 🚀 Customer Portal Implementation Roadmap

### **Phase 1: Core Features (Weeks 1-4)**
- Dashboard with key metrics
- Animal management
- Basic alerts
- Mobile responsiveness

### **Phase 2: Advanced Features (Weeks 5-8)**
- Detailed reports
- Marketplace integration
- Task scheduling
- API integrations

### **Phase 3: Optimization (Weeks 9-12)**
- Performance optimization
- Mobile app launch
- Community features
- Advanced analytics

### **Phase 4: Expansion (Weeks 13+)**
- Multi-farm management
- Team collaboration
- Advanced integrations
- International support

---

**Customer Portal Version:** 1.0  
**Last Updated:** December 2, 2025 00:08 UTC+02:00  
**Platform:** Livemo (Livestock Monitor)  
**Target Users:** Livestock Owners, Farm Managers, Pasture Operators
