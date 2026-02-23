// ==========================================
// PWA SERVICE WORKER
// ==========================================

self.addEventListener('install', (event) => {
    console.log('Service Worker Installed!');
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker Activated!');
});

self.addEventListener('fetch', (event) => {
    // Abhi ke liye bas normal network request chalne denge
    // Future mein hum isme offline support add kar sakte hain
    event.respondWith(fetch(event.request));
});