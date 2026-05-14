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

/**
 * Web Audio API — se mezcla con la música del sistema (Spotify, Apple
 * Music, etc.) en categoría "ambient", así que reproducir un beep aquí
 * NO pausa la música, solo se superpone. iOS bajará el volumen de la
 * música automáticamente mientras suena el beep.
 *
 * Antes usábamos elementos <audio> HTML5 — sonaban más fuerte pero
 * pausaban Spotify. Si en algún iPhone con cascos no se oyera el beep,
 * hay que volver al Audio HTML5 para esos casos (ver memoria ios_audio).
 */
let _audioCtx = null;
function _getAudioCtx() {
  if (_audioCtx) return _audioCtx;
  const Ctx = window.AudioContext || window.webkitAudioContext;
  if (!Ctx) return null;
  _audioCtx = new Ctx();
  return _audioCtx;
}

function _beep(freq, durationSec, volume) {
  const ctx = _getAudioCtx();
  if (!ctx) return;
  // Si el contexto está suspendido (iOS antes del primer toque), intenta despertar.
  if (ctx.state === 'suspended') ctx.resume().catch(() => {});

  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'sine';
  osc.frequency.value = freq;

  // Envelope con fade-in/out suaves para evitar clicks
  const fade = Math.min(0.01, durationSec / 4);
  gain.gain.setValueAtTime(0, now);
  gain.gain.linearRampToValueAtTime(volume, now + fade);
  gain.gain.setValueAtTime(volume, now + durationSec - fade);
  gain.gain.linearRampToValueAtTime(0, now + durationSec);

  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(now);
  osc.stop(now + durationSec);
}

// Construye un WAV con 3 pitidos consecutivos separados por silencios.
// Un solo clip HTML5 → una sola interrupción de música en iOS.
function _makeTripleBeepDataUri(freq, beepSec, gapSec, volume) {
  const sampleRate = 44100;
  const beepSamples = Math.floor(sampleRate * beepSec);
  const gapSamples  = Math.floor(sampleRate * gapSec);
  // 3 beeps + 2 gaps
  const numSamples = beepSamples * 3 + gapSamples * 2;
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

  const fade = Math.min(0.01, beepSec / 4);
  const fadeSamples = Math.floor(sampleRate * fade);
  let offset = 44;
  for (let beep = 0; beep < 3; beep++) {
    for (let i = 0; i < beepSamples; i++) {
      let amp = volume;
      if (i < fadeSamples) amp *= i / fadeSamples;
      else if (i > beepSamples - fadeSamples) amp *= (beepSamples - i) / fadeSamples;
      const s = Math.sin(2 * Math.PI * freq * (i / sampleRate)) * amp;
      view.setInt16(offset, s * 32767, true);
      offset += 2;
    }
    if (beep < 2) {
      // gap (silencio)
      for (let i = 0; i < gapSamples; i++) {
        view.setInt16(offset, 0, true);
        offset += 2;
      }
    }
  }

  const bytes = new Uint8Array(buffer);
  let binary = '';
  for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
  return 'data:audio/wav;base64,' + btoa(binary);
}

// Alert final: usa <audio> HTML5 con los 3 pitidos en un solo clip.
// En iOS la categoría de Audio HTML5 es "playback" → SUENA con cascos
// aunque haya música del sistema sonando, y aunque la app esté en
// background. Sí pausa Spotify ~1.5s pero solo 1 vez por descanso.
//
// Web Audio API se silenciaba con cascos cuando Spotify ocupaba la
// sesión de audio (categoría "ambient") — por eso volvemos a HTML5.
let _alertAudio = null;
function _getAlertAudio() {
  if (!_alertAudio) {
    // 3 pitidos de 0.35s separados por 0.25s de silencio → clip ~1.55s
    _alertAudio = new Audio(_makeTripleBeepDataUri(1000, 0.35, 0.25, 0.85));
    _alertAudio.preload = 'auto';
  }
  return _alertAudio;
}

// Reproduce el clip con los 3 pitidos finales del descanso.
function playAlertSound() {
  try {
    const a = _getAlertAudio();
    a.currentTime = 0;
    const p = a.play();
    if (p && p.catch) p.catch(() => {});
  } catch (e) {}
}

// Ticks 3-2-1 usan Web Audio API: se mezclan con la música (no pausan
// Spotify). Volumen más bajo, audio ducking automático en iOS.
function playTickSound() {
  try { _beep(700, 0.12, 0.6); } catch (e) {}
}

/**
 * Unlock audio on first user interaction (required by iOS).
 * Inicializa AudioContext (para ticks) Y reproduce el clip HTML5 en
 * silencio (para que iOS autorice el alert final).
 */
function unlockAudio() {
  // 1. AudioContext para ticks
  try {
    const ctx = _getAudioCtx();
    if (ctx) {
      if (ctx.state === 'suspended') ctx.resume().catch(() => {});
      _beep(440, 0.01, 0.0001);
    }
  } catch (e) {}

  // 2. Audio HTML5 para alert final (autorizar reproducción posterior)
  try {
    const a = _getAlertAudio();
    a.muted = true;
    const p = a.play();
    if (p && p.then) {
      p.then(() => { a.pause(); a.currentTime = 0; a.muted = false; })
       .catch(() => { a.muted = false; });
    } else {
      a.pause();
      a.currentTime = 0;
      a.muted = false;
    }
  } catch (e) {}
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

// Re-acquire wake lock when app comes back to foreground.
// Si hay un workout activo O un timer de descanso corriendo, re-pedir.
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState !== 'visible' || _wakeLock) return;
  const hasWorkout = !!Workout?.currentWorkout;
  const hasActiveTimer = !!Tracker?.timerInterval;
  if (hasWorkout || hasActiveTimer) {
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

// Pide permiso solo una vez por sesión, en respuesta a interacción del usuario.
let _notifPermissionAsked = false;
function ensureNotificationPermission() {
  if (_notifPermissionAsked) return;
  if (!('Notification' in window)) return;
  if (Notification.permission === 'granted' || Notification.permission === 'denied') return;
  _notifPermissionAsked = true;
  // No await — se resuelve en background. El usuario decide ahora,
  // y la próxima vez que el timer acabe ya tendrá permiso.
  Notification.requestPermission().catch(() => {});
}

function showRestDoneNotification() {
  if (!('Notification' in window) || Notification.permission !== 'granted') return;

  const title = '¡Descanso terminado! 💪';
  const options = {
    body: 'Continúa con la siguiente serie',
    icon: './assets/icons/icon-192.png',
    badge: './assets/icons/icon-192.png',
    tag: 'rest-done',
    renotify: true,
    requireInteraction: false,
    silent: false,
    vibrate: [200, 100, 200, 100, 400]
  };

  // Preferir SW.showNotification (funciona con pantalla bloqueada / app en
  // background). new Notification() solo funciona con la página visible.
  if ('serviceWorker' in navigator && navigator.serviceWorker.ready) {
    navigator.serviceWorker.ready
      .then(reg => reg.showNotification(title, options))
      .catch(() => {
        try { new Notification(title, options); } catch (e) {}
      });
  } else {
    try { new Notification(title, options); } catch (e) {}
  }
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
