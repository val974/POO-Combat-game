const path = require('path');


module.exports = {
	entry:'./js/script.js',
	watch: true,

	output : {
		path: path.resolve("./dist/"),
		filename : "bundle.js"

	},

	module: {
		rules: [
		{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['env']
				}
			}
		}
		]
	}
}