import karmaWebpack from 'karma-webpack';
import karmaJasmine from 'karma-jasmine';
import karmaPhantomJsLauncher from 'karma-phantomjs-launcher';
import karmaSourceMapLoader from 'karma-sourcemap-loader';
import karmaCoverage from 'karma-coverage';
import karmaNarrowReporter from 'karma-narrow-reporter';
import karmaChromeLauncher from 'karma-chrome-launcher';
import webpackConfig from '../webpack.config';

export default function (config) {
	config.set({
		basePath: '',
		frameworks: [ 'jasmine' ],
		files: [
			{ pattern: '../node_modules/phantomjs-polyfill/bind-polyfill.js', watched: false },
			{ pattern: 'spec.bundle.js', watched: false }
		],
		exclude: [],
		preprocessors: {
			'spec.bundle.js': [ 'webpack', 'sourcemap' ]
		},
		plugins: [
			karmaWebpack,
			karmaJasmine,
			karmaPhantomJsLauncher,
			karmaSourceMapLoader,
			karmaCoverage,
			karmaNarrowReporter,
			karmaChromeLauncher
		],
		webpack: webpackConfig,
		webpackMiddleware: {
			noInfo: true,
			colors: true,
			stats: {
				hash: false,
				version: false,
				timings: false,
				assets: false,
				chunks: false,
				modules: false,
				reasons: false,
				children: false,
				source: false,
				errors: true,
				errorDetails: true,
				warnings: false,
				publicPath: false
			}
		},
		coverageReporter: {
			type: 'lcov',
			dir: 'results/',
			subdir: '.'
		},
		narrowReporter: {
			showSuccess: true,
			stopOnFirstFail : true
		},
		reporters: [ 'narrow', 'coverage' ],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		browsers: [ 'PhantomJS' ],
		// browsers: [ 'Chrome' ],
		singleRun: false,
		browserDisconnectTimeout: 60000,
		browserNoActivityTimeout: 60000,
		browserDisconnectTolerance: 1,
		captureTimeout: 80000
	});
}
