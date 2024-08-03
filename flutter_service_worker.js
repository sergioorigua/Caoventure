'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c5d9a33762deb3d03c6968212bd2e4e7",
"assets/AssetManifest.bin.json": "7c0a90d1765dcd6a2c982b81ad594a57",
"assets/AssetManifest.json": "3c56190e68c8455a5a5e5bb6bba6041e",
"assets/assets/Baloo-Regular.ttf": "7ea5a2778c1043f5a28f86b10eaa588d",
"assets/assets/button1.png": "8292f8b063750a8cc0ab00402d6ac654",
"assets/assets/button2.png": "583a53a1c70ca1b601f6945fadc2c4a4",
"assets/assets/button3.png": "0c55e8ff22b8ec177c20298b1f26b7a5",
"assets/assets/button4.png": "878f799b8a4c75975e5414862714a488",
"assets/assets/charactersBg.png": "b5b58f56e3932e1b2d928bdb3d16d2a2",
"assets/assets/cirius.png": "15402d5bbe80af1c1bac2059165d9088",
"assets/assets/iconNavBar.png": "72663379edd85d58f84f824b5d395201",
"assets/assets/orion.png": "0e0b27deccc545068ba24b3d6acef6a4",
"assets/assets/panelJuego.png": "677be84f0fcf3d3d4580da3130f38469",
"assets/assets/prota.png": "d9103a371e196ef3906d026e3895fd98",
"assets/assets/prota2.png": "61bc352a4233944c484320b41b00932f",
"assets/assets/scroll1.png": "320c47a7130800157d14babef61e2913",
"assets/assets/scroll10.png": "38c794aeeded0b5dc3cf1a1b392104fd",
"assets/assets/scroll11.png": "63229665806bf9d7f025c3e9af897206",
"assets/assets/scroll12.png": "f9847d242f28021f07b2cfadcc58a409",
"assets/assets/scroll13.png": "9836d086a9a242ec2ff833988ca441c8",
"assets/assets/scroll14.png": "0c5d661c84e68aa9f6845f95c7a20a3e",
"assets/assets/scroll2.png": "d2480066fdde678009d295bc04b4318a",
"assets/assets/scroll3.png": "39441ae4b6466d628fb3c9c330d9450d",
"assets/assets/scroll4.png": "84e2097598b8813abbcd1b0f52cfec30",
"assets/assets/scroll5.png": "6c47acab4db7f48ccfd4e96cd2ed863c",
"assets/assets/scroll6.png": "bbacd38970de17bd4a1213769f7b06b2",
"assets/assets/scroll7.png": "ed4f47b70733c21848994aa72128e97b",
"assets/assets/scroll8.png": "2f04a01efeb9734df86d783a033436e1",
"assets/assets/scroll9.png": "80888f4ea2fdcf262fc0dd6d14da5e14",
"assets/assets/theomir.png": "0e47892ea8a1699c72b55322c209a9de",
"assets/assets/title.png": "96fe5f0a7fc9b034357626966ea519a0",
"assets/FontManifest.json": "7743a8a9b46a57548a9e1b1279d962b1",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "5a3f7c89595f4b04f1c144170088ac5b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/youtube_player_iframe/assets/player.html": "dc7a0426386dc6fd0e4187079900aea8",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"flutter_bootstrap.js": "043bf0863757b96bb5a13a09c4f3e1ae",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b79227d9aac9c9c101347c00340f8911",
"/": "b79227d9aac9c9c101347c00340f8911",
"main.dart.js": "c1bcd9a0828c9a17c21b900248af74cb",
"manifest.json": "a4cc5aa7ddfaf2f3d0d3c3a3dee26036",
"version.json": "a10e72223eb1720a114510dca46eeb67"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
