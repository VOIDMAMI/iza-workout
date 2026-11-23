# IZA Workout — Mobile Setup Guide

## ✅ Mobile-Ready Configuration

The app is **fully optimized for mobile** and ready to use on smartphones and tablets. Here's what's been configured:

---

## 📱 How to Use on Mobile

### **Android**

1. **Open in Chrome** (or any modern mobile browser)
   - Go to: `file:///` (on your device) or host via local server
   - Navigate to `index.html`

2. **Install as App**
   - Tap the **3-dot menu** (top right)
   - Select **"Install app"** or **"Add to Home Screen"**
   - The app will appear on your home screen as **IZA Workout**
   - It works **offline** after first load

### **iOS**

1. **Open in Safari**
   - Navigate to the app URL

2. **Install as App**
   - Tap the **Share** button (bottom/middle)
   - Select **"Add to Home Screen"**
   - Name: **IZA Workout** (pre-filled)
   - Tap **Add**
   - The app appears on your home screen

---

## 🔧 Mobile-First Features Included

✅ **Responsive Viewport**
- Correct scaling and zoom settings
- Touch-friendly sizing (minimum 44×44px touch targets)
- Handles notches/safe areas (`viewport-fit=cover`)

✅ **Progressive Web App (PWA)**
- Service Worker caching (offline support)
- App manifest (`manifest.json`)
- Installable on home screen
- Standalone mode (full screen, no browser chrome)

✅ **Touch Optimizations**
- `-webkit-tap-highlight-color: transparent` for smooth interactions
- Active state scaling (`.scale(0.92)` on tap)
- No flickering on touch

✅ **Screen Adaptations**
- `100dvh` (dynamic viewport height) for mobile keyboards
- `safe-area-inset-bottom` padding for bottom notches
- Max-width of 430px for consistent layout

✅ **Icons & Branding**
- Launcher icon (192×192 and 512×512 PNG)
- Theme color: `#8B5CF6` (violet)
- Apple touch icon for iOS
- Favicon

✅ **Meta Tags**
- `apple-mobile-web-app-capable` ✓
- `apple-mobile-web-app-status-bar-style: black-translucent` ✓
- Proper charset and language settings ✓

---

## 🚀 Local Testing (Desktop/Laptop)

### **Option 1: Direct File Access**
```bash
# Simply open index.html in any modern browser
# All data is stored locally in browser localStorage
```

### **Option 2: Local HTTP Server** (Recommended for PWA testing)

**Using Python:**
```bash
# Python 3.x
python -m http.server 8000

# Python 2.x
python -m SimpleHTTPServer 8000
```

Then visit: `http://localhost:8000`

**Using Node.js:**
```bash
# Install http-server globally (one-time)
npm install -g http-server

# Run from project directory
http-server
```

### **Option 3: VS Code Live Server**
- Right-click `index.html` → "Open with Live Server"
- Opens at `http://localhost:5500`

---

## 📊 Data Persistence

All user data is stored **locally in the browser**:
- Workout logs
- Progress data (weights, PRs)
- Streak counter
- Plan start dates
- Settings

**No server, no sync, no account needed.** Data stays on the device.

You can export/import data from the Progress tab.

---

## 🔄 Service Worker & Offline Mode

The Service Worker (`sw.js`) automatically:
1. **Caches all assets** on first visit
2. **Serves offline** if network fails
3. **Updates cache** with fresh files when online

**Cache Version:** `iza-workout-v2`
- Updated to include all new modules (plans-extra.js, express.js, etc.)

---

## 🛠️ File Structure for Mobile

```
GYM APP/
├── index.html                    # Entry point
├── manifest.json                 # PWA config
├── sw.js                         # Service Worker (offline cache)
├── css/                          # Mobile-first stylesheets
│   ├── index.css                 # Design system (CSS variables)
│   ├── components.css            # Buttons, nav, cards
│   └── pages.css                 # Page layouts
├── js/                           # All JavaScript modules
│   ├── app.js                    # PWA & routing
│   ├── storage.js                # localStorage API
│   └── ... (other modules)
└── assets/icons/                 # PWA icons
    ├── icon-192.png
    └── icon-512.png
```

---

## 💾 Browser Storage Limits

- **localStorage**: ~5-10MB (enough for thousands of workout logs)
- **Offline cache**: Unlimited (Service Worker)

No issues for a personal fitness app.

---

## ✨ Quick Checklist Before Mobile Use

- [x] Viewport meta tag configured
- [x] Touch events handled
- [x] PWA manifest created
- [x] Service Worker registered
- [x] Icons provided
- [x] Offline support enabled
- [x] Dynamic height viewport (`100dvh`)
- [x] Safe area padding
- [x] Cache includes all assets
- [x] Mobile-first CSS (max-width: 430px)

---

## 🐛 Troubleshooting

**"App won't install"**
- Must serve over HTTPS (unless localhost)
- Service Worker must be registered
- Manifest must be valid JSON

**"Data is lost"**
- Check browser storage limits (DevTools → Application → localStorage)
- Don't clear browser cache/data (it contains the workout logs!)
- Export data regularly for backup

**"App is slow offline"**
- Service Worker cache is being used
- First load caches everything; subsequent loads are instant
- Check network tab in DevTools to see cache status

**"Icons not showing"**
- Ensure `assets/icons/` folder exists
- Icons must be PNG files
- Check manifest paths are correct

---

## 📝 Notes

- The app is **Spanish-language** (UI in español)
- Designed for **one user per device** (personal fitness tracker)
- No internet required after first load
- All animations optimized for mobile (60fps)
- Touch targets: minimum 44×44px (WCAG 2.1 AAA)

Enjoy your mobile-friendly IZA Workout! 💪
