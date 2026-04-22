/* ============================================
   IZA WORKOUT — Utilities
   ============================================ */

/**
 * Format date to YYYY-MM-DD string
 */
function formatDateKey(date) {
  const d = new Date(date);
  return d.getFullYear() + '-' +
    String(d.getMonth() + 1).padStart(2, '0') + '-' +
    String(d.getDate()).padStart(2, '0');
}

/**
 * Format date to readable string
 */
function formatDateReadable(date) {
  const d = new Date(date);
  return d.getDate() + ' ' + MONTH_NAMES[d.getMonth()];
}

/**
 * Format date to full readable string
 */
function formatDateFull(date) {
  const d = new Date(date);
  return DAY_NAMES_FULL[d.getDay()] + ', ' + d.getDate() + ' de ' + MONTH_NAMES[d.getMonth()];
}

/**
 * Check if two dates are the same day
 */
function isSameDay(date1, date2) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  return d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate();
}

/**
 * Check if date is today
 */
function isToday(date) {
  return isSameDay(date, new Date());
}

/**
 * Generate unique ID
 */
function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
}

/**
 * Format seconds to MM:SS
 */
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return String(mins).padStart(2, '0') + ':' + String(secs).padStart(2, '0');
}

/**
 * Format pace (min/km)
 */
function formatPace(distanceKm, timeMinutes) {
  if (!distanceKm || distanceKm <= 0) return '--:--';
  const paceMinutes = timeMinutes / distanceKm;
  const mins = Math.floor(paceMinutes);
  const secs = Math.round((paceMinutes - mins) * 60);
  return mins + ':' + String(secs).padStart(2, '0');
}

/**
 * Debounce function
 */
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

/**
 * Show toast notification
 */
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const icons = {
    success: '✅',
    error: '❌',
    info: 'ℹ️',
    warning: '⚠️'
  };

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span class="toast-icon">${icons[type]}</span>
    <span class="toast-message">${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

/**
 * Get the start of the week (Monday) for a given date
 */
function getWeekStart(date) {
  const d = new Date(date);
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1);
  return new Date(d.setDate(diff));
}

/**
 * Get days in a month
 */
function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

/**
 * Get first day of month (0=Sun, 1=Mon, ...)
 */
function getFirstDayOfMonth(year, month) {
  return new Date(year, month, 1).getDay();
}

/**
 * Vibrate device (for haptic feedback)
 */
function vibrate(ms = 50) {
  if (navigator.vibrate) {
    navigator.vibrate(ms);
  }
}

/* ---- Alert system (sound + wake lock + notification) ---- */

let _audioCtx = null;
function _getAudioCtx() {
  if (!_audioCtx) {
    try {
      _audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) { return null; }
  }
  if (_audioCtx.state === 'suspended') _audioCtx.resume();
  return _audioCtx;
}

/**
 * Play a beep sound (works even with screen locked in PWA with audio session)
 */
function playAlertSound() {
  const ctx = _getAudioCtx();
  if (!ctx) return;

  // Three-beep pattern
  [0, 0.25, 0.5].forEach((delay, i) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.value = i === 2 ? 1000 : 800;
    gain.gain.setValueAtTime(0, ctx.currentTime + delay);
    gain.gain.linearRampToValueAtTime(0.4, ctx.currentTime + delay + 0.02);
    gain.gain.linearRampToValueAtTime(0, ctx.currentTime + delay + 0.2);
    osc.connect(gain).connect(ctx.destination);
    osc.start(ctx.currentTime + delay);
    osc.stop(ctx.currentTime + delay + 0.25);
  });
}

/**
 * Unlock audio context on first user interaction (required by iOS)
 */
function unlockAudio() {
  const ctx = _getAudioCtx();
  if (ctx && ctx.state === 'suspended') ctx.resume();
}

/* ---- Wake Lock (keep screen on) ---- */

let _wakeLock = null;

async function requestWakeLock() {
  try {
    if ('wakeLock' in navigator) {
      _wakeLock = await navigator.wakeLock.request('screen');
      _wakeLock.addEventListener('release', () => { _wakeLock = null; });
    }
  } catch (e) { /* ignore */ }
}

function releaseWakeLock() {
  if (_wakeLock) {
    _wakeLock.release().catch(() => {});
    _wakeLock = null;
  }
}

// Re-acquire wake lock when app comes back to foreground
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible' && Workout?.currentWorkout && !_wakeLock) {
    requestWakeLock();
  }
});

/* ---- Notifications ---- */

async function requestNotificationPermission() {
  if (!('Notification' in window)) return false;
  if (Notification.permission === 'granted') return true;
  if (Notification.permission === 'denied') return false;
  const result = await Notification.requestPermission();
  return result === 'granted';
}

function showRestDoneNotification() {
  if (!('Notification' in window) || Notification.permission !== 'granted') return;
  try {
    const n = new Notification('¡Descanso terminado! 💪', {
      body: 'Continúa con la siguiente serie',
      icon: './assets/icons/icon-192.png',
      badge: './assets/icons/icon-192.png',
      tag: 'rest-done',
      requireInteraction: false,
      silent: false
    });
    setTimeout(() => n.close(), 5000);
  } catch (e) { /* ignore */ }
}

/**
 * Animate a number counting up
 */
function animateNumber(element, target, duration = 800) {
  let start = 0;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
    const current = Math.round(eased * target);

    element.textContent = current;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}
