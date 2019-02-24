const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(common, {
//	devtool: 'source-map',
	output:{
		publicPath: "/"
	},
	plugins: [
		new CleanWebpackPlugin(['./dist']),		
	//	new UglifyJSPlugin()
	],
	optimization: {
		minimize:true,
		splitChunks: {
		   chunks: 'async'
		}
    },
	mode:"production"
 });