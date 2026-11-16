// Offline cache. Only handles this site's own files, so outside requests
// (like Google sign-in) are never touched.
// - File names carry the build (app.js?v=b26), so a new build never mixes with old files.
// - Install downloads fresh copies (cache: "reload"), never the phone's short-term copy.
// - The page itself comes from the network first, so a new build shows on the next open.
const V = "b26";
const CACHE = "ledger-cache-" + V;
const ASSETS = ["./", "./index.html", "./app.js?v=" + V, "./style.css?v=" + V, "./fb.js?v=" + V, "./storage-shim.js?v=" + V,
  "./manifest.json", "./icon-180.png", "./icon-192.png", "./icon-512.png", "./icon-maskable-512.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE)
      .then((c) => Promise.all(ASSETS.map((u) => fetch(new Request(u, { cache: "reload" })).then((res) => { if (res.ok) return c.put(u, res); }).catch(() => {}))))
      .then(() => self.skipWaiting())
  );
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", (e) => {
  const r = e.request;
  if (r.method !== "GET" || new URL(r.url).origin !== self.location.origin) return;
  if (r.mode === "navigate") {
    e.respondWith(
      fetch(r.url, { cache: "no-cache", credentials: "same-origin" })
        .then((res) => { if (res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put("./index.html", copy)); } return res; })
        .catch(() => caches.match("./index.html").then((h) => h || caches.match("./")))
    );
    return;
  }
  e.respondWith(caches.open(CACHE).then(async (c) => {
    const hit = await c.match(r);
    if (hit) return hit;
    const res = await fetch(r);
    if (res.ok) c.put(r, res.clone());
    return res;
  }));
});
