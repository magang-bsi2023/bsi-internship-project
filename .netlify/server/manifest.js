export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.18aaefb6.js","imports":["_app/immutable/entry/start.18aaefb6.js","_app/immutable/chunks/index.debf67a9.js","_app/immutable/chunks/singletons.d34481db.js","_app/immutable/chunks/index.cb6b0269.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.a8720cab.js","imports":["_app/immutable/entry/app.a8720cab.js","_app/immutable/chunks/index.debf67a9.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/courses",
				pattern: /^\/courses\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/courses/1.1.asal-hukum-syariah",
				pattern: /^\/courses\/1\.1\.asal-hukum-syariah\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
