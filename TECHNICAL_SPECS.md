# 🔧 Technical Specifications - Livestock Health Monitor

## Hardware Architecture

### System Diagram
```
┌─────────────────────────────────────────────────────────┐
│                    LIVESTOCK COLLAR                      │
│                                                          │
│  ┌──────────────┐         ┌─────────────┐              │
│  │   MPU6050    │────────▶│             │              │
│  │ Accelerometer│         │             │              │
│  │  + Gyroscope │         │    ESP32    │              │
│  └──────────────┘         │             │              │
│                           │ TinyML Model│              │
│  ┌──────────────┐         │             │              │
│  │   DS18B20    │────────▶│  Inference  │              │
│  │ Temperature  │         │             │              │
│  └──────────────┘         └──────┬──────┘              │
│                                  │                      │
│  ┌──────────────┐                │                      │
│  │  LiPo Battery│────────────────┘                      │
│  │  3.7V 1000mAh│                                       │
│  └──────────────┘                                       │
│                                                          │
│  Optional:                                               │
│  ┌──────────────┐         ┌─────────────┐              │
│  │ LoRa RFM95W  │         │  Neo-6M GPS │              │
│  └──────────────┘         └─────────────┘              │
└─────────────────────────────────────────────────────────┘
         │                           │
         ▼                           ▼
  ┌─────────────┐           ┌──────────────┐
  │ LoRa Gateway│           │ Farmer Phone │
  │  (Optional) │           │   (Alerts)   │
  └─────────────┘           └──────────────┘
```

---

## Component Specifications

### 1. ESP32 Microcontroller

**Model:** ESP32-WROOM-32  
**Specifications:**
- **CPU:** Dual-core Xtensa 32-bit LX6, up to 240 MHz
- **RAM:** 520 KB SRAM
- **Flash:** 4 MB
- **Wi-Fi:** 802.11 b/g/n
- **Bluetooth:** BLE 4.2
- **GPIO:** 34 pins
- **ADC:** 12-bit, 18 channels
- **Power:** 3.3V, 80-240 mA (active), <5 μA (deep sleep)

**Why ESP32:**
- Powerful enough for TinyML inference
- Low power consumption with sleep modes
- Built-in Wi-Fi/Bluetooth for alerts
- Large community support
- Arduino IDE compatible

---

### 2. MPU6050 Motion Sensor

**Type:** 6-axis IMU (Inertial Measurement Unit)  
**Specifications:**
- **Accelerometer:** ±2g, ±4g, ±8g, ±16g (configurable)
- **Gyroscope:** ±250, ±500, ±1000, ±2000 °/s
- **Interface:** I2C (400 kHz)
- **Resolution:** 16-bit ADC
- **Power:** 3.3V, 3.9 mA (active)
- **Size:** 20mm × 16mm

**Data Output:**
- Acceleration: X, Y, Z axes (m/s²)
- Rotation: X, Y, Z axes (°/s)
- Sampling Rate: 50-100 Hz (configurable)

**Use Case:**
- Detect walking, standing, lying, ruminating
- Identify abnormal gait (lameness)
- Track activity levels
- Detect stress behaviors (pacing, head shaking)

---

### 3. DS18B20 Temperature Sensor

**Type:** Digital temperature sensor  
**Specifications:**
- **Range:** -55°C to +125°C
- **Accuracy:** ±0.5°C (-10°C to +85°C)
- **Resolution:** 9-12 bit (configurable)
- **Interface:** 1-Wire protocol
- **Power:** 3.0-5.5V, 1 mA (active)
- **Waterproof:** Yes (stainless steel probe)
- **Cable Length:** 1 meter

**Use Case:**
- Monitor body temperature
- Detect fever (>39.5°C for cattle)
- Identify heat stress
- Early illness detection

---

### 4. Power System

#### Battery
**Type:** Lithium Polymer (LiPo)  
**Specifications:**
- **Voltage:** 3.7V nominal
- **Capacity:** 1000-2000 mAh
- **Size:** 50mm × 30mm × 6mm
- **Weight:** 20-30g
- **Discharge:** 1C continuous

**Battery Life Calculation:**
```
Average current draw:
- ESP32 active (100ms inference): 160 mA
- ESP32 sleep (rest of time): 0.01 mA
- MPU6050 active: 3.9 mA
- DS18B20 active: 1 mA

Duty cycle (sampling every 5 seconds):
- Active: 100ms every 5s = 2% duty cycle
- Sleep: 98% of time

Average current = (160 mA × 0.02) + (0.01 mA × 0.98) + 3.9 mA + 1 mA
                = 3.2 + 0.01 + 3.9 + 1 = 8.11 mA

Battery life = 1000 mAh / 8.11 mA = 123 hours ≈ 5 days

With 2000 mAh battery: ~10 days
```

#### Charger
**Model:** TP4056  
**Specifications:**
- **Input:** 5V USB (Micro-USB or USB-C)
- **Charge Current:** 1A (adjustable)
- **Protection:** Overcharge, over-discharge, short circuit
- **Size:** 26mm × 17mm

---

### 5. Optional: LoRa Module

**Model:** RFM95W  
**Specifications:**
- **Frequency:** 868 MHz (Europe) / 915 MHz (Americas)
- **Range:** 2-15 km (line of sight)
- **Power:** 3.3V, 120 mA (transmit)
- **Interface:** SPI
- **Sensitivity:** -148 dBm

**Use Case:**
- Long-range communication without Wi-Fi
- Send alerts to LoRa gateway
- Low power consumption
- Ideal for rural farms

---

### 6. Optional: GPS Module

**Model:** Neo-6M  
**Specifications:**
- **Accuracy:** 2.5m (horizontal)
- **Update Rate:** 1-10 Hz
- **Power:** 3.3V, 45 mA (active)
- **Interface:** UART
- **Cold Start:** 27s

**Use Case:**
- Track animal location
- Detect roaming patterns
- Geofencing alerts
- Theft prevention

---

## Enclosure Design

### Physical Specifications
- **Dimensions:** 90mm × 40mm × 25mm (L × W × H)
- **Weight:** 70-90g (with battery)
- **Material:** ABS plastic (UV resistant)
- **Rating:** IP65 (dust-tight, water-resistant)
- **Color:** Black or dark green (low visibility)

### Mounting Options
1. **Collar Mount:** Velcro strap, adjustable
2. **Leg Band:** Nylon strap with buckle
3. **Ear Tag:** Smaller version (future)

### Design Features
- **Sealed ports:** Rubber gaskets for charging port
- **Ventilation:** Small holes with mesh (prevent overheating)
- **LED indicator:** Status light (charging, alert)
- **Reset button:** Recessed (prevent accidental press)

---

## Wiring Diagram

### ESP32 Pin Connections

```
ESP32 DevKitC Pinout:
┌─────────────────────────────────┐
│  3V3  ─────────────────── VIN   │
│  GND  ─────────────────── GND   │
│  D21  ──── SDA (MPU6050)        │
│  D22  ──── SCL (MPU6050)        │
│  D4   ──── DS18B20 Data         │
│  D18  ──── LoRa SCK (optional)  │
│  D19  ──── LoRa MISO            │
│  D23  ──── LoRa MOSI            │
│  D5   ──── LoRa CS              │
│  D2   ──── LED Indicator        │
│  D15  ──── Buzzer (optional)    │
│  RX   ──── GPS TX (optional)    │
│  TX   ──── GPS RX (optional)    │
└─────────────────────────────────┘
```

### Component Connections

#### MPU6050 (I2C)
```
MPU6050    →    ESP32
VCC        →    3.3V
GND        →    GND
SDA        →    GPIO 21
SCL        →    GPIO 22
```

#### DS18B20 (1-Wire)
```
DS18B20    →    ESP32
VCC (Red)  →    3.3V
GND (Black)→    GND
Data (Yellow)→  GPIO 4 (with 4.7kΩ pull-up resistor)
```

#### LoRa RFM95W (SPI) - Optional
```
RFM95W     →    ESP32
VCC        →    3.3V
GND        →    GND
MOSI       →    GPIO 23
MISO       →    GPIO 19
SCK        →    GPIO 18
NSS/CS     →    GPIO 5
RST        →    GPIO 14
DIO0       →    GPIO 26
```

---

## Software Architecture

### Firmware Structure
```
livestock-monitor/
├── src/
│   ├── main.cpp              # Main program loop
│   ├── sensors/
│   │   ├── mpu6050.cpp       # Accelerometer/gyro driver
│   │   ├── ds18b20.cpp       # Temperature sensor driver
│   │   └── gps.cpp           # GPS driver (optional)
│   ├── ml/
│   │   ├── model.h           # TensorFlow Lite model
│   │   ├── inference.cpp     # ML inference engine
│   │   └── preprocessing.cpp # Data normalization
│   ├── communication/
│   │   ├── wifi.cpp          # Wi-Fi manager
│   │   ├── lora.cpp          # LoRa communication
│   │   └── bluetooth.cpp     # BLE for phone app
│   ├── power/
│   │   ├── battery.cpp       # Battery monitoring
│   │   └── sleep.cpp         # Power management
│   └── alerts/
│       ├── led.cpp           # LED indicator
│       ├── buzzer.cpp        # Local buzzer
│       └── notifications.cpp # Send alerts
├── lib/
│   ├── TensorFlowLite/       # TF Lite library
│   ├── MPU6050/              # Sensor library
│   └── OneWire/              # DS18B20 library
├── data/
│   └── model.tflite          # Trained ML model
└── platformio.ini            # Build configuration
```

### Data Flow
```
1. Sensor Reading (every 5 seconds)
   ↓
2. Data Buffer (5-second window)
   ↓
3. Preprocessing (normalize, scale)
   ↓
4. ML Inference (1D CNN)
   ↓
5. Classification (Normal/Stressed/Abnormal)
   ↓
6. Decision Logic
   ├─ Normal → Continue monitoring
   ├─ Stressed → Log event
   └─ Abnormal → Send alert
   ↓
7. Alert System
   ├─ LED blink
   ├─ Buzzer (optional)
   ├─ Wi-Fi/LoRa message
   └─ Log to SD card
```

---

## ML Model Specifications

### Input Shape
```
Input: [250, 7]
- 250 timesteps (5 seconds @ 50 Hz)
- 7 features: [AccX, AccY, AccZ, GyroX, GyroY, GyroZ, Temp]
```

### Model Architecture (1D CNN)
```
Layer 1: Conv1D(32 filters, kernel=3, activation=ReLU)
Layer 2: MaxPooling1D(pool_size=2)
Layer 3: Conv1D(64 filters, kernel=3, activation=ReLU)
Layer 4: MaxPooling1D(pool_size=2)
Layer 5: Flatten()
Layer 6: Dense(64, activation=ReLU)
Layer 7: Dropout(0.5)
Layer 8: Dense(3, activation=Softmax)

Output: [Normal, Stressed, Abnormal] probabilities
```

### Model Size
- **Parameters:** ~8,500
- **File Size:** ~35 KB (quantized)
- **RAM Usage:** ~120 KB
- **Inference Time:** ~50-80 ms

### Training Configuration
- **Framework:** TensorFlow / Edge Impulse
- **Optimizer:** Adam (lr=0.001)
- **Loss:** Categorical Crossentropy
- **Epochs:** 50-100
- **Batch Size:** 32
- **Validation Split:** 20%

---

## Power Management

### Sleep Modes
```cpp
// Deep sleep between readings
esp_sleep_enable_timer_wakeup(5 * 1000000); // 5 seconds
esp_deep_sleep_start();

// Light sleep during data collection
esp_light_sleep_start();
```

### Power Consumption Modes
| Mode | Current | Duration | % Time |
|------|---------|----------|--------|
| **Active (inference)** | 160 mA | 100 ms | 2% |
| **Sensor reading** | 10 mA | 50 ms | 1% |
| **Deep sleep** | 0.01 mA | 4.85 s | 97% |
| **Average** | ~8 mA | - | 100% |

### Battery Monitoring
```cpp
// Read battery voltage
int batteryLevel = analogRead(BATTERY_PIN);
float voltage = (batteryLevel / 4095.0) * 3.3 * 2; // Voltage divider

// Low battery alert
if (voltage < 3.4) {
    sendLowBatteryAlert();
}
```

---

## Communication Protocols

### Wi-Fi (Local Network)
```cpp
// Connect to Wi-Fi
WiFi.begin(ssid, password);

// Send HTTP POST alert
HTTPClient http;
http.begin("http://server.com/api/alert");
http.addHeader("Content-Type", "application/json");
http.POST("{\"cow_id\":\"001\",\"status\":\"abnormal\"}");
```

### LoRa (Long Range)
```cpp
// Send LoRa packet
LoRa.beginPacket();
LoRa.print("COW001:ABNORMAL");
LoRa.endPacket();
```

### Bluetooth (Phone App)
```cpp
// BLE characteristic for alerts
BLECharacteristic alertChar("alert-uuid", BLERead | BLENotify);
alertChar.setValue("Abnormal behavior detected");
alertChar.notify();
```

---

## Data Format

### Sensor Data Log (CSV)
```csv
timestamp,acc_x,acc_y,acc_z,gyro_x,gyro_y,gyro_z,temp,label
1698765432,-0.12,0.98,0.01,0.05,-0.02,0.01,38.2,normal
1698765433,-0.30,1.10,0.02,0.10,0.03,0.00,38.3,normal
1698765434,0.10,0.05,0.00,0.50,0.20,0.10,39.6,abnormal
```

### Alert Message (JSON)
```json
{
  "device_id": "COW001",
  "timestamp": "2025-10-22T08:45:00Z",
  "status": "abnormal",
  "confidence": 0.92,
  "temperature": 39.8,
  "battery": 78,
  "location": {
    "lat": -1.9536,
    "lon": 30.0606
  }
}
```

---

## Testing & Validation

### Unit Tests
- Sensor reading accuracy
- Model inference speed
- Power consumption
- Communication reliability

### Field Tests
- Device durability (water, shock, dust)
- Battery life (real-world conditions)
- Model accuracy (live animals)
- Alert latency

### Performance Metrics
- **Accuracy:** >85% (normal vs abnormal)
- **Latency:** <100ms (inference)
- **Battery Life:** >7 days
- **Range:** >500m (LoRa)
- **Uptime:** >95%

---

## Manufacturing Specifications

### PCB Design
- **Size:** 80mm × 35mm
- **Layers:** 2-layer
- **Thickness:** 1.6mm
- **Finish:** HASL (lead-free)
- **Silkscreen:** White on black

### Assembly
- **Method:** SMT (surface mount) + THT (through-hole)
- **Components:** 25-30 parts
- **Assembly Time:** 10-15 minutes per unit
- **Testing Time:** 5 minutes per unit

### Quality Control
1. Visual inspection
2. Functional test (sensors)
3. ML inference test
4. Battery test
5. Water resistance test
6. Drop test (1 meter)

---

## Cost Breakdown (Production Scale)

### Per Unit Cost (1000 units)
| Component | Cost |
|-----------|------|
| ESP32 module | $4 |
| MPU6050 | $1.50 |
| DS18B20 | $0.80 |
| LiPo battery | $3 |
| TP4056 charger | $0.50 |
| PCB | $2 |
| Enclosure | $2.50 |
| Strap/mounting | $1 |
| Assembly | $3 |
| Testing | $1 |
| Packaging | $0.50 |
| **Total** | **$19.80** |

### Optional Add-ons
- LoRa module: +$6
- GPS module: +$4
- Solar panel: +$8

---

**Document Version:** 1.0  
**Last Updated:** October 22, 2025  
**Status:** Design Phase
