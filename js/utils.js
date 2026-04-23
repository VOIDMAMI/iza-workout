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

// Build a WAV data URI at the given frequency and duration.
function _makeBeepDataUri(freq, durationSec, volume = 0.5) {
  const sampleRate = 44100;
  const numSamples = Math.floor(sampleRate * durationSec);
  const bytesPerSample = 2;
  const dataSize = numSamples * bytesPerSample;
  const buffer = new ArrayBuffer(44 + dataSize);
  const view = new DataView(buffer);

  const writeStr = (offset, str) => {
    for (let i = 0; i < str.length; i++) view.setUint8(offset + i, str.charCodeAt(i));
  };
  writeStr(0, 'RIFF');
  view.setUint32(4, 36 + dataSize, true);
  writeStr(8, 'WAVE');
  writeStr(12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * bytesPerSample, true);
  view.setUint16(32, bytesPerSample, true);
  view.setUint16(34, 16, true);
  writeStr(36, 'data');
  view.setUint32(40, dataSize, true);

  // Sine with short fade-in/out to avoid clicks
  const fade = Math.min(0.01, durationSec / 4);
  const fadeSamples = Math.floor(sampleRate * fade);
  for (let i = 0; i < numSamples; i++) {
    let amp = volume;
    if (i < fadeSamples) amp *= i / fadeSamples;
    else if (i > numSamples - fadeSamples) amp *= (numSamples - i) / fadeSamples;
    const s = Math.sin(2 * Math.PI * freq * (i / sampleRate)) * amp;
    view.setInt16(44 + i * 2, s * 32767, true);
  }

  // Convert to base64
  const bytes = new Uint8Array(buffer);
  let binary = '';
  for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
  return 'data:audio/wav;base64,' + btoa(binary);
}

let _tickAudio = null;
let _alertAudio = null;
function _getTickAudio() {
  if (!_tickAudio) {
    _tickAudio = new Audio(_makeBeepDataUri(700, 0.12, 0.6));
    _tickAudio.preload = 'auto';
  }
  return _tickAudio;
}
function _getAlertAudio() {
  if (!_alertAudio) {
    _alertAudio = new Audio(_makeBeepDataUri(1000, 0.5, 0.7));
    _alertAudio.preload = 'auto';
  }
  return _alertAudio;
}

function playAlertSound() {
  try {
    const a = _getAlertAudio();
    a.currentTime = 0;
    a.play().catch(() => {});
  } catch (e) {}
}

function playTickSound() {
  try {
    const a = _getTickAudio();
    a.currentTime = 0;
    a.play().catch(() => {});
  } catch (e) {}
}

/**
 * Unlock audio on first user interaction (required by iOS).
 * Plays both clips silently so iOS marks them as user-triggered for later.
 */
function unlockAudio() {
  [_getTickAudio(), _getAlertAudio()].forEach(a => {
    try {
      a.muted = true;
      const p = a.play();
      if (p && p.then) {
        p.then(() => {
          a.pause();
          a.currentTime = 0;
          a.muted = false;
        }).catch(() => { a.muted = false; });
      } else {
        a.pause();
        a.currentTime = 0;
        a.muted = false;
      }
    } catch (e) {}
  });
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
