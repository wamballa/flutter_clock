'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "8fb5f8431e63c99479dfd81a557d6772",
"index.html": "18e95424391d7e4019885af954c5bb06",
"/": "18e95424391d7e4019885af954c5bb06",
"main.dart.js": "db227a8d5cbdf3b6207c86f183e0402f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "34118c0bad9f74f4490493c3f9f2c706",
"assets/images/21.gif": "362b1239de7871a171432c25bee805b8",
"assets/images/35.gif": "3cd4ceed13130814d86d97cca250bef3",
"assets/images/34.gif": "e70926c1235133f02374b40a748785cf",
"assets/images/20.gif": "b9744b3a4ef5469039807087d6118bd6",
"assets/images/36.gif": "feec85c19d39ef2215b1e9878566f879",
"assets/images/22.gif": "2903b7a4c2694e769dde15b84a4c4998",
"assets/images/23.gif": "770dbae03d727f62d4649e2b0b96f1bc",
"assets/images/37.gif": "a287358b2115f7afbad19419f4da7aa1",
"assets/images/33.gif": "cf4ec4f02912da06a4cf8f1559f8e46e",
"assets/images/27.gif": "5c5df7ba34d60c6dce4f0fa8f354b816",
"assets/images/26.gif": "b43af66883bdd37fd6a33e9fd716bdab",
"assets/images/32.gif": "25fe104cb3d914054bf3e7a8b71dc9e9",
"assets/images/18.gif": "39b94e67b72156a364c7271805b25098",
"assets/images/24.gif": "5c065e707634b3b8f7159991542b7678",
"assets/images/30.gif": "52d9b35181578642c823f63a457fe99b",
"assets/images/31.gif": "8e7fdf1c1923b9aa0c5076a66a8d0140",
"assets/images/25.gif": "87f1b652d181e395fcd91bc3410d71ce",
"assets/images/19.gif": "ae4f71819a9b8c8967abcd5caa243a9e",
"assets/images/42.gif": "07178c5f070d4e7d92be57221bf3cbe6",
"assets/images/56.gif": "27d887c685b550c450123459a9d874cb",
"assets/images/4.gif": "555006f4b8d92245022e6b6d6a4d82e6",
"assets/images/81.gif": "118911139b3792ff1e409851fc7d3398",
"assets/images/80.gif": "0114ae68182af832d76078571600439c",
"assets/images/57.gif": "0e0de15d046f81e76a971a3fa2d2c79b",
"assets/images/5.gif": "ef15423023a2bdfc0e23291c2120bf6a",
"assets/images/43.gif": "39620902534b6e1a895de71db1648298",
"assets/images/7.gif": "017d5f2a73ef53161e66aa393d06d637",
"assets/images/55.gif": "121eb5911f07fd0699778eb05d870289",
"assets/images/41.gif": "f97620f089b43a18fc0e22e9c0ad6445",
"assets/images/69.gif": "c553f9e54a81c21c8025647aa1ae2eb3",
"assets/images/82.gif": "7318470fd0e2663a9787c831177c041e",
"assets/images/83.gif": "44558bcaa0cae2d7e17f80a2c3e29550",
"assets/images/68.gif": "30f35744b9c2e44f02835ff3dab1e5fd",
"assets/images/40.gif": "399b75412b5b030d9eb9fe78c8aa6b74",
"assets/images/6.gif": "7d0daa684fdef4ec216d91d7bccc7c25",
"assets/images/54.gif": "68825bbcee90b6adb3556c28366d6c58",
"assets/images/78.gif": "dab16b2e6d4b9b0259d66b0132c5da5f",
"assets/images/50.gif": "5575797ed023c27c90196729e7a1cc71",
"assets/images/2.gif": "c77148c919e613967c1d7fee75d5171c",
"assets/images/44.gif": "a61c2a857275a064a9e25d97e33e62a8",
"assets/images/87.gif": "846df533d0b802edf99e384cf687b51c",
"assets/images/86.gif": "bcba80e48ca7fe323722df8aa0fe13b4",
"assets/images/92.gif": "a73b5d7448838c0ef86b929d8fa8d1b9",
"assets/images/45.gif": "51dd33babfac230969431e1bfd793116",
"assets/images/51.gif": "8e93f0f79212df6eee80f117e6afd0a7",
"assets/images/3.gif": "c67c1b25b39fa6f3bcda0cff9bf6fa7e",
"assets/images/79.gif": "5330b75a2468d2ee89614d2a820c9f75",
"assets/images/47.gif": "264e9d9198be0b1af9fa4ce8d3c8f10d",
"assets/images/1.gif": "3ef1d2e672ed8000e62fa01a089ac8ff",
"assets/images/53.gif": "6e6d7b3215ba361d1006598f91f42078",
"assets/images/84.gif": "de7b5003b5a55da160a16077bec88b49",
"assets/images/90.gif": "65f2ddfb772623aa9224a4eb8affab7d",
"assets/images/91.gif": "be8384c5cc067c29c93eaaa6acdacd1b",
"assets/images/85.gif": "3bebabd610da8b865e4af3ca067a7ac5",
"assets/images/0.gif": "19f2680bd76ab53dd18060e8972cb376",
"assets/images/52.gif": "ea35d7807f3ad6607ea5aadc5fa2bba8",
"assets/images/46.gif": "4664d1462a28fc995c2e083ad6b97ba0",
"assets/images/63.gif": "7f17290d5edc8a9a7b3fece21cb7180d",
"assets/images/77.gif": "680bacfdfe62512d787d82ccb9cefc04",
"assets/images/88.gif": "2639e168e8bd0e2b11c4b6f2e180a8b9",
"assets/images/89.gif": "cb21cd6ade4c6daa6d46aba36807e3b7",
"assets/images/76.gif": "08eba1de6100c1f367c847c512ba0ad4",
"assets/images/62.gif": "6bd82c3238fa53ee076e2468fb8d71a7",
"assets/images/74.gif": "77e0a2901a7b127b7ddfa134dd3ff6ca",
"assets/images/60.gif": "c77148c919e613967c1d7fee75d5171c",
"assets/images/48.gif": "b39a6ecc3260548a5f6638ecc7e0facb",
"assets/images/49.gif": "badc3b31adf54a8b5dc1b213b1e4404d",
"assets/images/61.gif": "8cb2287a2d796404d60eadfe75ded3c9",
"assets/images/75.gif": "f9d8a36063e87603da3e880885170ada",
"assets/images/59.gif": "5a23f3d876dfc37990e9e129073c9854",
"assets/images/71.gif": "03a1e4b4d8fcfe4247a060aa25f0d015",
"assets/images/65.gif": "b8d1946ec05b63e3dc53c4f7e795ad78",
"assets/images/64.gif": "eb3a8ebf22de933b22972d91f53a1ad6",
"assets/images/70.gif": "a3224124ee48cddde865ecff61c13fde",
"assets/images/58.gif": "e7c0f3e93952b5afd8668cc83087ac09",
"assets/images/8.gif": "cfcc486e7932b2a44208ef4c4eb94451",
"assets/images/66.gif": "a92c7f4d40f9b0db44be33c5e642bfdf",
"assets/images/72.gif": "6d456dad3d1aec7b2a48e4d1833ae2d3",
"assets/images/73.gif": "c9f3ddaa2a70704da0564d970a41aee7",
"assets/images/67.gif": "c277ab7afe8b068dc03c32309e981ca1",
"assets/images/9.gif": "65e887ab53b62db9b9ac5fe7b3206583",
"assets/images/28.gif": "ecdb41122d887ca64221ef8c6dcbf644",
"assets/images/29.gif": "22c365434140a6715f288e6cc2fde30e",
"assets/images/15.gif": "4b0561d5159eb5fa958b80c25c565210",
"assets/images/16.gif": "30f35744b9c2e44f02835ff3dab1e5fd",
"assets/images/12.gif": "1aabc5fce0982400963326b72e3e96e6",
"assets/images/39.gif": "5fb0c6f290eeb327a0ce48001901cdaa",
"assets/images/11.gif": "75df99d2faac34c0cbb12dd118101317",
"assets/images/10.gif": "c452fdd21c938f5d197e437f5bdcb904",
"assets/images/38.gif": "ae3799c1114f374948b46398069cf449",
"assets/AssetManifest.json": "363742386a8a47570e01299c0d649325",
"assets/NOTICES": "72db68836c84d8a114f82106b659d0b4",
"assets/FontManifest.json": "40f68c1a9d2eed8c776fdd609b566afa",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/Gameplay.ttf": "c6767a1590c8ff7aa65a304215af915a",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
