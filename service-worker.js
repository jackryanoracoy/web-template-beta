const version = "0.1";
const cacheName = 'jackro-template-${version}';
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
				'/',
				'index.html',

				'common/js/jquery-2.1.3.min.js',
				'common/js/object-fit.min.js',
				'common/js/custom.min.js',

				'common/css/style.min.css',
			
				'common/font-awesome/css/fontawesome-all.min.css',
			
				'common/font-awesome/webfonts/fa-brands-400.ttf',
				'common/font-awesome/webfonts/fa-brands-400.woff',
				'common/font-awesome/webfonts/fa-brands-400.woff2',
				'common/font-awesome/webfonts/fa-regular-400.ttf',
				'common/font-awesome/webfonts/fa-regular-400.woff',
				'common/font-awesome/webfonts/fa-regular-400.woff2',
				'common/font-awesome/webfonts/fa-solid-900.ttf',
				'common/font-awesome/webfonts/fa-solid-900.woff',
				'common/font-awesome/webfonts/fa-solid-900.woff2',
			
				'common/fonts/Roboto/Roboto-Black.ttf',
				'common/fonts/Roboto/Roboto-Bold.ttf',
				'common/fonts/Roboto/Roboto-Italic.ttf',
				'common/fonts/Roboto/Roboto-Light.ttf',
				'common/fonts/Roboto/Roboto-Medium.ttf',
				'common/fonts/Roboto/Roboto-Regular.ttf',
				'common/fonts/Roboto/Roboto-Thin.ttf',
				'common/fonts/Roboto_Condensed/RobotoCondensed-Bold.ttf',
				'common/fonts/Roboto_Condensed/RobotoCondensed-Italic.ttf',
				'common/fonts/Roboto_Condensed/RobotoCondensed-Light.ttf',
				'common/fonts/Roboto_Condensed/RobotoCondensed-Regular.ttf',
      ])
				.then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, {ignoreSearch: true}))
      .then(response => {
      return response || fetch(event.request);
    })
  );
});