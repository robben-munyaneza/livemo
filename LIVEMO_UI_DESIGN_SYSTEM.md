# Livemo UI Design System & Structure

**Platform:** Livemo (Livestock Monitor)  
**Color Palette:** Natural, earthy tones reflecting livestock farming  
**Target Users:** Pasture owners, livestock farmers, ranch managers

---

## 🎨 Color Palette

### **Primary Colors**
```css
/* Main Colors - Earth & Natural Tones */
--umber: #4A3C28;          /* Deep brown - primary brand color */
--cafe-au-lait: #C8B88B;   /* Light coffee brown - secondary */
--amber-brown: #A67C52;     /* Warm amber brown - accent */

/* Background & Text */
--background-white: #FFFFFF;  /* Pure white background */
--text-black: #000000;        /* Pure black text */
--text-gray: #333333;         /* Dark gray for secondary text */
--text-light: #666666;        /* Light gray for hints */

/* Button Colors */
--button-primary: #000000;    /* Black buttons */
--button-secondary: #A67C52;  /* Amber brown buttons */
--button-hover: #4A3C28;      /* Umber for hover states */

/* Status Colors */
--success-green: #2D5016;     /* Deep green - healthy animals */
--warning-orange: #D2691E;     /* Warm orange - alerts */
--error-red: #8B0000;         /* Dark red - critical issues */
--info-blue: #1E3A8A;         /* Deep blue - information */
```

### **Color Usage Guidelines**
- **Background:** Always white (#FFFFFF) for clean, professional look
- **Text:** Black (#000000) for primary text, dark gray for secondary
- **Buttons:** Black for primary actions, amber brown for secondary
- **Main UI Elements:** Umber for headers, cafe-au-lait for backgrounds
- **Status:** Natural earth tones for alerts (green, orange, red)

---

## 🏗️ UI Structure & Layout

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

## 📱 Dashboard Structure

### **Main Dashboard Layout**
```
┌─────────────────────────────────────────────────────────┐
│  🐄 Livemo Dashboard                    [User] [Alerts] │
├─────────────────────────────────────────────────────────┤
│ Overview | Animals | Health | Feed | Pasture | Reports   │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐       │
│  │Total    │ │Healthy  │ │Alerts   │ │Feed     │       │
│  │Animals  │ │Animals  │ │Today    │ │Efficiency│       │
│  │  247    │ │  235    │ │   3     │ │  94%    │       │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘       │
│                                                         │
│  ┌─────────────────────┐ ┌─────────────────────────────┐ │
│  │   Health Status     │ │     Recent Activities       │ │
│  │                     │ │                             │ │
│  │ 🐄 Cattle: 95%      │ │ • Cow #123 - Low temperature│ │
│  │ 🐐 Goats: 92%       │ │ • Goat #45 - Vaccination due│ │
│  │ 🐔 Poultry: 98%     │ │ • Feed schedule updated     │ │
│  │ 🐷 Swine: 89%       │ │ • Pasture rotation completed│ │
│  └─────────────────────┘ └─────────────────────────────┘ │
│                                                         │
│  ┌─────────────────────────────────────────────────────┐ │
│  │               Pasture Map View                      │ │
│  │                                                     │ │
│  │  [Interactive map showing animal locations]         │ │
│  └─────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
```

---

## 🗂️ Page Structure Templates

### **1. Animals Management Page**
```
┌─────────────────────────────────────────────────────────┐
│ Animals Management                    [+ Add Animal]    │
├─────────────────────────────────────────────────────────┤
│ [Search] [Filter] [Export] [Bulk Actions]              │
│                                                         │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ 🐄 Cattle (45) │ 🐐 Goats (67) │ 🐔 Poultry (120) │ │
│ │ 🐷 Swine (15)   │ 🐑 Sheep (23)  │ 🐴 Horses (5)   │ │
│ └─────────────────────────────────────────────────────┘ │
│                                                         │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ ID    │ Type │ Name   │ Status │ Health │ Actions    │ │
│ │ #001  │ Cow  │ Bessie │ Healthy│ 95%    │ [Edit]    │ │
│ │ #002  │ Cow  │ Daisy │ Alert │ 78%    │ [View]    │ │
│ │ #003  │ Goat │ Billy │ Healthy│ 92%    │ [Edit]    │ │
│ └─────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
```

### **2. Health Monitoring Page**
```
┌─────────────────────────────────────────────────────────┐
│ Health Monitoring                              [Refresh] │
├─────────────────────────────────────────────────────────┤
│                                                         │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐       │
│ │ Temperature  │ │ Heart Rate  │ │ Activity    │       │
│ │ Monitoring   │ │ Monitoring  │ │ Monitoring  │       │
│ │             │ │             │ │             │       │
│ │ 🟢 Normal   │ │ 🟢 Normal   │ │ 🟡 Low      │       │
│ │ 38.5°C      │ │ 65 bpm      │ │ 45%         │       │
│ └─────────────┘ └─────────────┘ └─────────────┘       │
│                                                         │
│ ┌─────────────────────────────────────────────────────┐ │
│ │                 Health Alerts                       │ │
│ │                                                     │ │
│ │ 🚨 Cow #002 - Elevated temperature (39.8°C)       │ │
│ │ ⚠️  Goat #015 - Reduced activity (30% below normal) │ │
│ │ 📋 Vaccination due for 5 animals this week          │ │
│ └─────────────────────────────────────────────────────┘ │
│                                                         │
│ ┌─────────────────────────────────────────────────────┐ │
│ │              Individual Animal Health               │ │
│ │                                                     │ │
│ │ [Animal selector] [Health history] [Treatments]     │ │
│ └─────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
```

### **3. Sensor Management Page**
```
┌─────────────────────────────────────────────────────────┐
│ Sensor Management                         [+ Add Sensor] │
├─────────────────────────────────────────────────────────┤
│                                                         │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐       │
│ │ Active      │ │ Inactive    │ │ Issues      │       │
│ │ Sensors     │ │ Sensors     │ │ Detected    │       │
│ │     42      │ │      3      │ │      2      │       │
│ └─────────────┘ └─────────────┘ └─────────────┘       │
│                                                         │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ Sensor ID │ Animal │ Type    │ Battery │ Status     │ │
│ │ S001      │ Cow #1│ Health  │ 85%     │ 🟢 Active  │ │
│ │ S002      │ Cow #2│ GPS     │ 92%     │ 🟢 Active  │ │
│ │ S003      │ Goat #1│ Health  │ 15%     │ 🔴 Low Bat │ │
│ └─────────────────────────────────────────────────────┘ │
│                                                         │
│ ┌─────────────────────────────────────────────────────┐ │
│ │              Sensor Settings                         │ │
│ │                                                     │ │
│ │ [Alert thresholds] [Update frequency] [Battery     │ │
│ │ management] [Replacement schedule]                 │ │
│ └─────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
```

---

## 🎯 Component Library

### **1. Header Components**
```html
<!-- Main Header -->
<header class="bg-umber text-white">
  <div class="logo">🐄 Livemo</div>
  <nav class="main-nav">
    <a href="/dashboard">Dashboard</a>
    <a href="/animals">Animals</a>
    <a href="/health">Health</a>
    <a href="/sensors">Sensors</a>
  </nav>
  <div class="user-actions">
    <button class="btn-black">Alerts (3)</button>
    <div class="user-menu">John Doe ▼</div>
  </div>
</header>
```

### **2. Card Components**
```html
<!-- Stats Card -->
<div class="card-cafe-au-lait">
  <div class="card-header">
    <h3>Total Animals</h3>
    <span class="icon">🐄</span>
  </div>
  <div class="card-value">247</div>
  <div class="card-change">+5 this week</div>
</div>

<!-- Health Status Card -->
<div class="card-white">
  <div class="card-header-umber">
    <h4>Cattle Health</h4>
  </div>
  <div class="health-indicator">
    <div class="health-bar" style="width: 95%"></div>
    <span>95% Healthy</span>
  </div>
</div>
```

### **3. Button Components**
```html
<!-- Primary Button -->
<button class="btn-black">Add Animal</button>

<!-- Secondary Button -->
<button class="btn-amber">View Details</button>

<!-- Status Button -->
<button class="btn-success">Healthy</button>
<button class="btn-warning">Alert</button>
<button class="btn-error">Critical</button>
```

### **4. Form Components**
```html
<!-- Form Input -->
<div class="form-group">
  <label class="label-black">Animal Name</label>
  <input type="text" class="input-white" placeholder="Enter animal name">
</div>

<!-- Select Dropdown -->
<div class="form-group">
  <label class="label-black">Animal Type</label>
  <select class="select-cafe-au-lait">
    <option>🐄 Cattle</option>
    <option>🐐 Goats</option>
    <option>🐔 Poultry</option>
    <option>🐷 Swine</option>
  </select>
</div>
```

---

## 📱 Mobile Responsive Structure

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

### **Mobile Navigation**
- **Bottom Navigation Bar** for quick access
- **Hamburger Menu** for full navigation
- **Swipe Gestures** for between sections
- **Touch-Friendly** buttons and controls

---

## 🎨 CSS Framework

### **Core CSS Variables**
```css
:root {
  /* Colors */
  --umber: #4A3C28;
  --cafe-au-lait: #C8B88B;
  --amber-brown: #A67C52;
  --background-white: #FFFFFF;
  --text-black: #000000;
  --text-gray: #333333;
  --text-light: #666666;
  
  /* Spacing */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  
  /* Typography */
  --font-family: 'Inter', 'Arial', sans-serif;
  --font-size-xs: 12px;
  --font-size-sm: 14px;
  --font-size-md: 16px;
  --font-size-lg: 18px;
  --font-size-xl: 24px;
  
  /* Border Radius */
  --border-radius-sm: 4px;
  --border-radius-md: 8px;
  --border-radius-lg: 12px;
  
  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.1);
  --shadow-md: 0 4px 6px rgba(0,0,0,0.1);
  --shadow-lg: 0 10px 15px rgba(0,0,0,0.1);
}
```

### **Component Classes**
```css
/* Buttons */
.btn-black {
  background: var(--text-black);
  color: var(--background-white);
  border: none;
  padding: 12px 24px;
  border-radius: var(--border-radius-md);
  font-weight: 600;
}

.btn-amber {
  background: var(--amber-brown);
  color: var(--background-white);
  border: none;
  padding: 12px 24px;
  border-radius: var(--border-radius-md);
  font-weight: 600;
}

/* Cards */
.card-cafe-au-lait {
  background: var(--cafe-au-lait);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-md);
}

.card-white {
  background: var(--background-white);
  border: 1px solid var(--cafe-au-lait);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-sm);
}
```

---

## 🔄 Navigation Structure

### **Primary Navigation**
```
Dashboard
├── Overview
├── Quick Stats
└── Recent Activities

Animals
├── All Animals
├── Add Animal
├── Animal Groups
└── Animal Details

Health
├── Health Overview
├── Individual Health
├── Vaccinations
├── Treatments
└── Health Reports

Sensors
├── Sensor Status
├── Add Sensor
├── Sensor Settings
└── Sensor Reports

Feed Management
├── Feed Schedule
├── Feed Inventory
├── Nutrition Plans
└── Feed Analytics

Pasture Management
├── Pasture Map
├── Grazing Plans
├── Pasture Health
└── Rotation Schedule

Reports
├── Health Reports
├── Performance Reports
├── Financial Reports
└── Export Data

Settings
├── Profile
├── Farm Settings
├── Alert Preferences
└── System Settings
```

---

## 📊 Data Visualization

### **Chart Colors**
- **Primary Charts:** Umber (#4A3C28)
- **Secondary Charts:** Cafe au lait (#C8B88B)
- **Accent Charts:** Amber brown (#A67C52)
- **Success Data:** Deep green (#2D5016)
- **Warning Data:** Warm orange (#D2691E)
- **Error Data:** Dark red (#8B0000)

### **Chart Types**
- **Line Charts:** Health trends over time
- **Bar Charts:** Animal group comparisons
- **Pie Charts:** Health status distribution
- **Heat Maps:** Pasture utilization
- **Gauge Charts:** Individual animal metrics

---

## 🎯 User Experience Principles

### **Design Philosophy**
1. **Clarity First** - Easy to understand at a glance
2. **Natural Colors** - Earth tones reflect farming environment
3. **Professional Yet Approachable** - Serious but not intimidating
4. **Data-Driven** - Information hierarchy based on importance
5. **Mobile-First** - Works seamlessly on all devices

### **Accessibility**
- **High Contrast** - Black text on white background
- **Clear Typography** - Readable fonts and sizes
- **Keyboard Navigation** - Full keyboard accessibility
- **Screen Reader Support** - Semantic HTML structure
- **Color Blind Friendly** - Not color-dependent for information

---

**Design System Version:** 1.0  
**Last Updated:** December 1, 2025 23:53 UTC+02:00  
**Platform:** Livemo (Livestock Monitor)  
**Target Users:** Pasture Owners, Livestock Farmers, Ranch Managers
