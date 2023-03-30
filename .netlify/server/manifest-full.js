export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.52d09adf.js","imports":["_app/immutable/entry/start.52d09adf.js","_app/immutable/chunks/index.9fb448a9.js","_app/immutable/chunks/singletons.fed97b4f.js","_app/immutable/chunks/index.05f8793a.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.22879ba3.js","imports":["_app/immutable/entry/app.22879ba3.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.9fb448a9.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/10.js'),
			() => import('./nodes/11.js'),
			() => import('./nodes/12.js'),
			() => import('./nodes/13.js'),
			() => import('./nodes/14.js'),
			() => import('./nodes/15.js'),
			() => import('./nodes/16.js'),
			() => import('./nodes/17.js'),
			() => import('./nodes/18.js'),
			() => import('./nodes/19.js')
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
				id: "/materi",
				pattern: /^\/materi\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/materi/1.1.-barter-dan-uang",
				pattern: /^\/materi\/1\.1\.-barter-dan-uang\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/materi/1.2.-sejarah-dan-awal-praktik-bank",
				pattern: /^\/materi\/1\.2\.-sejarah-dan-awal-praktik-bank\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/materi/1.3.-mengapa-negara-perlu-bank",
				pattern: /^\/materi\/1\.3\.-mengapa-negara-perlu-bank\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/materi/1.4.-kehadiran-bank-bagi-masyarakat",
				pattern: /^\/materi\/1\.4\.-kehadiran-bank-bagi-masyarakat\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			},
			{
				id: "/materi/1.5.-evolusi-perbankan",
				pattern: /^\/materi\/1\.5\.-evolusi-perbankan\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			},
			{
				id: "/materi/1.6.-masa-depan-bank",
				pattern: /^\/materi\/1\.6\.-masa-depan-bank\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 9 },
				endpoint: null
			},
			{
				id: "/materi/1.7.-integritas-bankir",
				pattern: /^\/materi\/1\.7\.-integritas-bankir\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 10 },
				endpoint: null
			},
			{
				id: "/materi/2.1.-kearifan-lokal",
				pattern: /^\/materi\/2\.1\.-kearifan-lokal\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 11 },
				endpoint: null
			},
			{
				id: "/materi/2.2.-apa-itu-syariah",
				pattern: /^\/materi\/2\.2\.-apa-itu-syariah\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 12 },
				endpoint: null
			},
			{
				id: "/materi/2.3.-bank-syariah",
				pattern: /^\/materi\/2\.3\.-bank-syariah\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 13 },
				endpoint: null
			},
			{
				id: "/materi/2.4.-sejarah-bank-syariah-di-indonesia",
				pattern: /^\/materi\/2\.4\.-sejarah-bank-syariah-di-indonesia\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 14 },
				endpoint: null
			},
			{
				id: "/materi/2.5.-masa-depan-bank-syariah",
				pattern: /^\/materi\/2\.5\.-masa-depan-bank-syariah\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 15 },
				endpoint: null
			},
			{
				id: "/materi/3.1.-genelogi-bangsa-indonesia",
				pattern: /^\/materi\/3\.1\.-genelogi-bangsa-indonesia\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 16 },
				endpoint: null
			},
			{
				id: "/materi/3.2.-hubungan-agama-dan-negara",
				pattern: /^\/materi\/3\.2\.-hubungan-agama-dan-negara\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 17 },
				endpoint: null
			},
			{
				id: "/materi/3.3.-indonesia-rumah-kita",
				pattern: /^\/materi\/3\.3\.-indonesia-rumah-kita\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 18 },
				endpoint: null
			},
			{
				id: "/tentang",
				pattern: /^\/tentang\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 19 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
