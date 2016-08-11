var path = require("path");
var ProgressBarPlugin = require('progress-bar-webpack-plugin');
var HtmlPlugin = require("html-webpack-plugin");
var webpack = require("webpack");
module.exports = {
	devtool: 'cheap-module-eval-source-map',
	context: __dirname + '/app',
	entry: [
		"webpack-hot-middleware/client?reload=true",
		"./bootstrap.js"
	],
	output: {
		path: path.resolve(__dirname, "build"),
		publicPath: "/",
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: [ "ng-annotate?add=true", "babel" ]
			}
		]
	},
	plugins: [
		new ProgressBarPlugin(),
		new HtmlPlugin({
			filename: 'index.html',
			template: __dirname + '/index.html',
			inject: 'body'
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	node: {
		fs: 'empty'
	}
};