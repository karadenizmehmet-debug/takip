// Ana ekrana kurulabilmesi için servis çalışanı: önbellek tutmaz, her şey ağdan gelir.
// Mehmet Karadeniz, 2026-2027
self.addEventListener("install", function () { self.skipWaiting(); });
self.addEventListener("activate", function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener("fetch", function () {});
