const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(common, {
	output:{
		publicPath: "/"
	},
	plugins: [
		new CleanWebpackPlugin(['./dist']),
	],
	optimization: {
		minimize:true,
		splitChunks: {
		   chunks: 'async'
		}
    },
	mode:"production"
 });