# 🚀 Quick Start Guide - Centralized Livestock Monitor

## Get Started in 1 Week for Under $150

---

## 📦 What You Need (Minimum Viable Prototype)

### Shopping List

| Item | Where to Buy | Cost |
|------|--------------|------|
| **Raspberry Pi 4 (4GB)** | Amazon/AliExpress | $55 |
| **Pi Camera Module V2** | Amazon | $25 |
| **32GB microSD card** | Any electronics store | $8 |
| **Power supply (5V 3A)** | Included with Pi or separate | $10 |
| **Weatherproof case** | Amazon (IP65 box) | $15 |
| **USB microphone** (optional) | Amazon | $10 |
| **Total** | | **$123** |

**For solar power (add later):**
- 20W solar panel: $25
- 12V 7Ah battery: $20
- USB charge controller: $15

---

## ⚡ Setup Steps (Day by Day)

### Day 1: Hardware Setup

#### Step 1: Install Raspberry Pi OS
```bash
# Download Raspberry Pi Imager
# https://www.raspberrypi.com/software/

# Flash "Raspberry Pi OS (64-bit)" to SD card
# Enable SSH and WiFi in settings
```

#### Step 2: Connect Camera
```bash
# Connect Pi Camera to CSI port
# Boot Pi and enable camera:
sudo raspi-config
# Interface Options → Camera → Enable
```

#### Step 3: First Boot
```bash
# SSH into Pi (or use monitor)
ssh pi@raspberrypi.local
# Default password: raspberry

# Update system
sudo apt update && sudo apt upgrade -y
```

---

### Day 2: Install Dependencies

```bash
# Install Python and tools
sudo apt install -y python3-pip python3-opencv git

# Install PyTorch (for Raspberry Pi)
pip3 install torch torchvision torchaudio

# Install Ultralytics (YOLOv8)
pip3 install ultralytics

# Install other dependencies
pip3 install numpy pillow opencv-python-headless

# Test camera
libcamera-hello
```

---

### Day 3: Test Object Detection

#### Download YOLOv8 Model
```bash
# Create project directory
mkdir ~/livestock-monitor
cd ~/livestock-monitor

# Download pre-trained YOLOv8 nano model
python3 << EOF
from ultralytics import YOLO
model = YOLO('yolov8n.pt')  # Downloads automatically
print("Model downloaded!")
EOF
```

#### Test Detection on Sample Image
```python
# test_detection.py
from ultralytics import YOLO
from picamera2 import Picamera2
import cv2

# Initialize camera
picam2 = Picamera2()
picam2.start()

# Load model
model = YOLO('yolov8n.pt')

# Capture image
frame = picam2.capture_array()

# Run detection
results = model(frame)

# Display results
for r in results:
    print(f"Detected {len(r.boxes)} objects")
    for box in r.boxes:
        print(f"Class: {r.names[int(box.cls)]}, Confidence: {box.conf:.2f}")

picam2.stop()
```

Run it:
```bash
python3 test_detection.py
```

---

### Day 4: Collect Training Data

#### Record Video of Your Animals
```python
# record_video.py
from picamera2 import Picamera2
from picamera2.encoders import H264Encoder
import time

picam2 = Picamera2()
video_config = picam2.create_video_configuration()
picam2.configure(video_config)

encoder = H264Encoder(bitrate=10000000)
output = "cattle_video.h264"

picam2.start_recording(encoder, output)
print("Recording... Press Ctrl+C to stop")

try:
    time.sleep(3600)  # Record for 1 hour
except KeyboardInterrupt:
    print("Stopping...")

picam2.stop_recording()
```

#### Label Your Data
```bash
# Convert video to frames
ffmpeg -i cattle_video.h264 -vf fps=1 frames/frame_%04d.jpg

# Use free labeling tool
# https://www.makesense.ai/ (web-based, no install)
# Label: cow, sick_cow, lying, standing, eating
```

---

### Day 5: Train Custom Model

#### Prepare Dataset
```
dataset/
├── images/
│   ├── train/
│   │   ├── img001.jpg
│   │   └── ...
│   └── val/
│       ├── img050.jpg
│       └── ...
└── labels/
    ├── train/
    │   ├── img001.txt
    │   └── ...
    └── val/
        ├── img050.txt
        └── ...
```

#### Create data.yaml
```yaml
# data.yaml
path: /home/pi/livestock-monitor/dataset
train: images/train
val: images/val

nc: 5  # number of classes
names: ['cow', 'sick_cow', 'lying', 'standing', 'eating']
```

#### Train Model
```python
# train.py
from ultralytics import YOLO

# Load pretrained model
model = YOLO('yolov8n.pt')

# Train on your data
results = model.train(
    data='data.yaml',
    epochs=50,
    imgsz=640,
    batch=8,
    device='cpu',  # Use 'cuda' if you have GPU
    patience=10
)

print("Training complete!")
print(f"Best model saved to: {results.save_dir}")
```

**Note:** Training on Raspberry Pi CPU will be slow (6-12 hours). Consider:
- Use Google Colab (free GPU): https://colab.research.google.com
- Train on laptop, then transfer model to Pi

---

### Day 6: Build Monitoring System

#### Main Application
```python
# monitor.py
from ultralytics import YOLO
from picamera2 import Picamera2
import cv2
import time
from datetime import datetime
import json

# Configuration
MODEL_PATH = 'runs/detect/train/weights/best.pt'
ALERT_THRESHOLD = 0.7  # Confidence threshold
CHECK_INTERVAL = 5  # seconds

# Initialize
model = YOLO(MODEL_PATH)
picam2 = Picamera2()
picam2.start()

# Health tracking
animal_health = {}

def analyze_frame(frame):
    """Run detection and analyze health"""
    results = model(frame)
    
    detections = {
        'total_animals': 0,
        'sick_count': 0,
        'lying_count': 0,
        'alerts': []
    }
    
    for r in results:
        for box in r.boxes:
            cls_name = r.names[int(box.cls)]
            confidence = float(box.conf)
            
            if confidence < ALERT_THRESHOLD:
                continue
            
            detections['total_animals'] += 1
            
            if cls_name == 'sick_cow':
                detections['sick_count'] += 1
                detections['alerts'].append({
                    'type': 'sick_animal',
                    'confidence': confidence,
                    'timestamp': datetime.now().isoformat()
                })
            
            if cls_name == 'lying':
                detections['lying_count'] += 1
    
    # Alert if too many lying (>50% of herd)
    if detections['total_animals'] > 0:
        lying_ratio = detections['lying_count'] / detections['total_animals']
        if lying_ratio > 0.5:
            detections['alerts'].append({
                'type': 'excessive_lying',
                'ratio': lying_ratio,
                'timestamp': datetime.now().isoformat()
            })
    
    return detections

def send_alert(alert):
    """Send alert (SMS, email, etc.)"""
    print(f"🚨 ALERT: {alert}")
    # TODO: Implement SMS/email/webhook
    with open('alerts.log', 'a') as f:
        f.write(json.dumps(alert) + '\n')

def main():
    print("🐄 Livestock Monitor Started")
    print(f"Checking every {CHECK_INTERVAL} seconds...")
    
    while True:
        try:
            # Capture frame
            frame = picam2.capture_array()
            
            # Analyze
            detections = analyze_frame(frame)
            
            # Log
            timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
            print(f"[{timestamp}] Animals: {detections['total_animals']}, "
                  f"Sick: {detections['sick_count']}, "
                  f"Lying: {detections['lying_count']}")
            
            # Send alerts
            for alert in detections['alerts']:
                send_alert(alert)
            
            # Save snapshot if alert
            if detections['alerts']:
                filename = f"alert_{datetime.now().strftime('%Y%m%d_%H%M%S')}.jpg"
                cv2.imwrite(filename, frame)
                print(f"Saved snapshot: {filename}")
            
            # Wait
            time.sleep(CHECK_INTERVAL)
            
        except KeyboardInterrupt:
            print("\nStopping monitor...")
            break
        except Exception as e:
            print(f"Error: {e}")
            time.sleep(CHECK_INTERVAL)
    
    picam2.stop()

if __name__ == '__main__':
    main()
```

Run it:
```bash
python3 monitor.py
```

---

### Day 7: Deploy & Test

#### Make it Run on Boot
```bash
# Create systemd service
sudo nano /etc/systemd/system/livestock-monitor.service
```

Add:
```ini
[Unit]
Description=Livestock Health Monitor
After=network.target

[Service]
Type=simple
User=pi
WorkingDirectory=/home/pi/livestock-monitor
ExecStart=/usr/bin/python3 /home/pi/livestock-monitor/monitor.py
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
```

Enable:
```bash
sudo systemctl enable livestock-monitor
sudo systemctl start livestock-monitor

# Check status
sudo systemctl status livestock-monitor

# View logs
sudo journalctl -u livestock-monitor -f
```

#### Install in Weatherproof Case
1. Mount Pi in case
2. Route camera cable through grommet
3. Seal with silicone
4. Mount case on pole/barn (3-4m high)
5. Angle camera 30-45° downward
6. Connect power (solar or mains)

---

## 📊 Dashboard (Optional - Day 8+)

### Simple Web Dashboard
```python
# dashboard.py
from flask import Flask, render_template, jsonify
import json
from datetime import datetime, timedelta

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/stats')
def stats():
    # Read recent alerts
    alerts = []
    try:
        with open('alerts.log', 'r') as f:
            for line in f.readlines()[-100:]:  # Last 100 alerts
                alerts.append(json.loads(line))
    except FileNotFoundError:
        pass
    
    # Calculate stats
    recent_alerts = [a for a in alerts 
                     if datetime.fromisoformat(a['timestamp']) > 
                     datetime.now() - timedelta(hours=24)]
    
    return jsonify({
        'total_alerts_24h': len(recent_alerts),
        'sick_count': sum(1 for a in recent_alerts if a['type'] == 'sick_animal'),
        'recent_alerts': recent_alerts[-10:]
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
```

Access at: `http://raspberrypi.local:5000`

---

## 🔧 Troubleshooting

### Camera Not Working
```bash
# Check camera connection
vcgencmd get_camera

# Should show: supported=1 detected=1

# Test with libcamera
libcamera-still -o test.jpg
```

### Model Too Slow
```bash
# Use smaller model
model = YOLO('yolov8n.pt')  # Nano (fastest)

# Reduce image size
results = model(frame, imgsz=320)  # Default is 640

# Reduce FPS
time.sleep(10)  # Check every 10 seconds instead of 5
```

### Out of Memory
```bash
# Increase swap
sudo dphys-swapfile swapoff
sudo nano /etc/dphys-swapfile
# Set CONF_SWAPSIZE=2048
sudo dphys-swapfile setup
sudo dphys-swapfile swapon
```

---

## 📈 Next Steps

### Week 2: Improve Accuracy
- Collect more training data (1000+ images)
- Label more behaviors
- Retrain model
- Test on multiple animals

### Week 3: Add Features
- Thermal camera (fever detection)
- Audio analysis (coughing)
- Individual animal tracking
- SMS alerts (Twilio)

### Week 4: Scale
- Add second camera (different angle)
- Solar power setup
- Cloud dashboard
- Multi-farm deployment

---

## 💰 Cost Scaling

### 1 Farm (50 animals)
- 1 station: $150 (prototype) or $500 (production)
- Cost per animal: $3-10

### 10 Farms (500 animals)
- 10 stations: $5,000
- Cost per animal: $10
- Revenue potential: $15,000-25,000

### 100 Farms (5,000 animals)
- 100 stations: $40,000
- Cost per animal: $8
- Revenue potential: $150,000-250,000

---

## 🎯 Success Metrics

### Technical
- ✅ Detection accuracy >80%
- ✅ False positive rate <15%
- ✅ System uptime >95%
- ✅ Alert latency <1 minute

### Business
- ✅ Detect 1 sick animal early (saves $100-400)
- ✅ ROI in <6 months
- ✅ Farmer satisfaction >4/5
- ✅ Reduce vet costs by 20%+

---

## 📞 Support Resources

### Learning
- **YOLOv8 Docs:** https://docs.ultralytics.com
- **Raspberry Pi Camera:** https://picamera.readthedocs.io
- **Edge Impulse:** https://edgeimpulse.com (alternative training platform)

### Community
- **Raspberry Pi Forums:** https://forums.raspberrypi.com
- **r/computervision:** Reddit community
- **AgTech Discord:** Various servers

### Hardware
- **Raspberry Pi:** https://raspberrypi.com
- **Adafruit:** https://adafruit.com (sensors, accessories)
- **AliExpress:** Cheap components

---

**You can have a working prototype monitoring real animals in 7 days for under $150!** 🚀

**Next:** Deploy, collect feedback, iterate, scale to $50M+ business 📈
