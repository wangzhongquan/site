const merge = require("webpack-merge");
const common = require('./webpack.common.js');

module.exports= merge(common, {
	devtool:"inline-source-map",
	devServer: {
		disableHostCheck: true,//解决 Invalid Host/Origin header 问题
		inline:true,
		historyApiFallback: true,
		port:8886
	},	
	mode:"development"
});