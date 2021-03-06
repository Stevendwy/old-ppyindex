module.exports = {
	entry: "./js/index.js",
    output: {
        path: "./js/",
        filename: "ppyindex.js"
    },
	
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	}
}
