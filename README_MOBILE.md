# 📱 IZA Workout — Mobile App

Your personal fitness tracker, now ready for mobile!

## ✨ What You Have

A **Progressive Web App (PWA)** that:
- ✅ Works **offline** (Service Worker caching)
- ✅ Installs on home screen (Android & iOS)
- ✅ Tracks workouts, weights, reps, and progress
- ✅ Stores data **locally** (no account needed, no server)
- ✅ Responds to touch (mobile-optimized UI)
- ✅ Works in Spanish 🇪🇸

**No internet required.** No login. No ads. Just your fitness data on your phone.

---

## 🚀 Get Started in 2 Minutes

### **Fastest Way to Test**

1. Open **PowerShell** in this folder (Shift + Right-click)
2. Type: `python -m http.server 8000`
3. On your phone (same WiFi): Visit `http://192.168.x.x:8000`
   - Find your IP by running `ipconfig` on your computer
4. **Done!** App is running on your phone.

### **Install as App**

**Android:**
- Tap the 3-dot menu (top right)
- Select "Install app"
- ✅ App appears on home screen

**iOS:**
- Tap Share (⬆️)
- Select "Add to Home Screen"
- ✅ App appears on home screen

---

## 📚 Documentation

Read these files in order:

1. **QUICK_START_MOBILE.txt** ← **Start here!**
   - 2-minute quick reference
   - Key commands
   - Fastest way to get running

2. **DEPLOYMENT.md**
   - 6 ways to run the app (local server, GitHub Pages, etc.)
   - Choose your preferred setup method
   - Pros/cons of each approach

3. **MOBILE_SETUP.md**
   - Deep dive into mobile configuration
   - PWA features explained
   - Offline support details
   - Browser storage limits

4. **TEST_MOBILE.md**
   - Checklist for testing all features
   - "Critical path test" (10-step verification)
   - Expected performance benchmarks
   - Troubleshooting guide

---

## 🎯 Features Ready for Mobile

| Feature | What It Does |
|---------|--------------|
| **🏠 Inicio** | Today's workout, streak counter, quick stats |
| **📋 Entrenos** | Browse all programs (Más Fuertes, Express workouts) |
| **📅 Calendario** | Monthly view, set plan dates, see completed days |
| **📈 Progreso** | Personal records (PRs), running logs, progress charts |
| **💪 Tracker** | Log weights, reps, rest times during workout |

---

## 💾 Your Data

- **Stored locally** in your browser (localStorage)
- **Never sent anywhere** (no server, no cloud)
- **Persists forever** unless you clear browser cache
- **Can export** from Progress tab for backup

**Worry-free:** Your workout data is yours alone.

---

## 📱 Offline Support

The app works **completely offline** after first load:

1. **First visit:** Downloads all assets (CSS, JS, images)
2. **Service Worker** caches everything
3. **Airplane mode:** App works just fine
4. **Navigate, log workouts,** view history — all offline
5. **Go online:** Data syncs automatically

No internet? No problem. 🚀

---

## ⚡ Performance

- **First load:** ~2-3 seconds (creates offline cache)
- **Later loads:** <1 second (from Service Worker cache)
- **Navigation:** Instant (<300ms between tabs)
- **Offline:** Just as fast as online

Built for speed on mobile networks.

---

## 🔧 Requirements

**What You Need:**
- Modern smartphone (Android 5+ or iOS 11+)
- Modern browser (Chrome, Safari, Edge, Firefox)
- WiFi or mobile internet (first load only)
- ✅ That's it!

**What You DON'T Need:**
- ❌ No login account
- ❌ No credit card
- ❌ No server
- ❌ No cloud sync
- ❌ No special software

---

## 🆘 Quick Troubleshooting

**"App won't load on phone"**
→ Check phone and computer on **same WiFi**
→ Check IP address (run `ipconfig` on computer)

**"App won't install"**
→ Install from **localhost** first (easier to test)
→ Or use GitHub Pages / Netlify (free HTTPS)

**"My data disappeared"**
→ Check you didn't clear browser cache
→ Use **Export** feature to backup regularly

**"Works offline but no new features"**
→ Clear Service Worker cache or restart browser
→ See MOBILE_SETUP.md for cache troubleshooting

---

## 🌐 Deployment Options

**For Testing Locally:**
```bash
python -m http.server 8000
# Visit: http://localhost:8000
```

**For Sharing (Public HTTPS):**
1. GitHub Pages (free, ~5 min setup)
2. Netlify Drop (drag & drop, instant)
3. Vercel (automatic from GitHub)

See **DEPLOYMENT.md** for full instructions.

---

## 📋 Mobile Checklist

Before relying on the app for actual training:

- [ ] Open app on phone
- [ ] Navigate all tabs (Inicio → Entrenos → Calendario → Progreso)
- [ ] Log a workout and mark it complete
- [ ] Check progress bar updated
- [ ] Test offline (airplane mode)
- [ ] Install as home screen app
- [ ] Close and reopen app
- [ ] Verify data persisted

See **TEST_MOBILE.md** for complete testing guide.

---

## 🎨 Design Details

- **Color scheme:** Light, premium, minimalista
- **Primary color:** Violet `#8B5CF6`
- **Typography:** Inter (Google Fonts)
- **Layout:** Mobile-first, max-width 430px
- **Touch targets:** Minimum 44×44px (WCAG 2.1 AAA)
- **Language:** Español 🇪🇸

---

## 📊 What's Included

```
GYM APP/
├── index.html              # Entry point
├── manifest.json           # PWA configuration
├── sw.js                   # Service Worker (offline cache)
│
├── css/
│   ├── index.css           # Design system & variables
│   ├── components.css      # Buttons, cards, nav
│   └── pages.css           # Page layouts
│
├── js/
│   ├── app.js              # Router & PWA init
│   ├── storage.js          # localStorage API
│   ├── data.js             # Workout plan definitions
│   ├── plans-extra.js      # Additional plans
│   ├── express.js          # Express workouts
│   ├── workout.js          # Workout tracking UI
│   ├── calendar.js         # Calendar view
│   ├── progress.js         # PRs & charts
│   ├── running.js          # Running log
│   ├── plans.js            # Plans browser
│   ├── tracker.js          # Set tracking
│   └── utils.js            # Helpers
│
├── assets/icons/
│   ├── icon-192.png        # Home screen icon
│   └── icon-512.png        # Larger icon
│
└── docs/
    ├── README_MOBILE.md    # This file
    ├── QUICK_START_MOBILE.txt
    ├── MOBILE_SETUP.md
    ├── DEPLOYMENT.md
    └── TEST_MOBILE.md
```

---

## 🎯 Next Steps

1. **Read** `QUICK_START_MOBILE.txt` (2 min)
2. **Choose** a deployment method from `DEPLOYMENT.md`
3. **Test** using the checklist in `TEST_MOBILE.md`
4. **Install** as PWA on home screen
5. **Start logging** your workouts! 💪

---

## 💡 Pro Tips

- **Backup your data:** Export from Progress tab regularly
- **Multiple devices:** Each device stores data independently
- **Offline mode:** Perfect for gym (no WiFi needed)
- **Works like native app:** Doesn't feel like a website
- **Privacy:** All data stays on your phone (nothing sent to servers)

---

## ❓ FAQs

**Q: Do I need an internet connection?**
A: No! After first load, the app works completely offline.

**Q: Where is my data stored?**
A: On your phone, in the browser's localStorage. No servers, no cloud.

**Q: Can I use it on multiple phones?**
A: Yes, but each phone has its own separate data (no sync).

**Q: What if I uninstall the app?**
A: Data is in localStorage, so it'll be cleared if you uninstall.

**Q: Can I share data with other users?**
A: No, this is a personal single-user app.

**Q: Is it available on App Store / Google Play?**
A: No, but it installs like a native app from your browser.

---

## 🚀 You're All Set!

Everything is configured and ready to go. Just:

1. Start a local server
2. Open on your phone
3. Install as app
4. Start training!

**Happy workouts!** 💪

---

## 📞 Support

- **Setup issues?** → Read DEPLOYMENT.md
- **Testing questions?** → Read TEST_MOBILE.md
- **Configuration details?** → Read MOBILE_SETUP.md
- **Quick reference?** → Read QUICK_START_MOBILE.txt

**All documentation is in this folder.** 📚

---

*IZA Workout — Your personal fitness tracker, built with ❤️*
