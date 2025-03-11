var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: [
		'./app/index'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.DefinePlugin({'process.env': {'NODE_ENV': JSON.stringify('production')}}),
		new webpack.optimize.UglifyJsPlugin({compressor: {warnings: false}}
		)
	],
	module: {
		loaders: [
			{test: /\.jsx?$/, loaders: ['babel'], include: path.join(__dirname, 'app')},
			{test: /\.css$/, loaders: ['style', 'css'], include: path.join(__dirname, 'app')}
		]
	}
};

