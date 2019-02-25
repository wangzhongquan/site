const path=require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')
const asserts = 'asserts';
module.exports = {
	entry:{
		app:"./src/index.js"
	},
	plugins:[
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			template:__dirname+'/src/index.html',
		}),
		new MiniCssExtractPlugin({
			filename: asserts +'/css/[name]_[contenthash:8].css',
			chunkFilename: asserts + "/css/[name]_[hash].css"})
	],
	module:{
		rules:[
			{
				test:/\.vue$/,
				include: path.resolve(__dirname, "src"),
				loader:'vue-loader'
			},
			{
				test:/\.(js)$/,
				include: path.resolve(__dirname, "src"),
				loader:'babel-loader'
			},			
			{
				test:/\.(css|less)$/,
				use:[
					{loader:'style-loader'},
				//	{loader:MiniCssExtractPlugin.loader},
					{loader:'css-loader'},
					'less-loader'
				]
			},
            {
                test: /\.(woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader'
            },
			{
				test:/\.(png|jpg)$/,
				use:[
					{
						loader:'url-loader',
						options:{
							limit:300,
							name:'[hash].[ext]',
							outputPath: asserts +'/img/'
						}
					
					}
				]
			}
		]
	},
	resolve: {
		alias: {
            'vue': 'vue/dist/vue.js'
        },
        extensions: ['.js', '.jsx', '.vue']		
    },
	output:{
		filename: asserts+"/js/[name].[hash:10].js",
		chunkFilename: asserts+'/js/[name].[hash:10].js',
		path:path.resolve(__dirname,"dist")
	}
}