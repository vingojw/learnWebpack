module.exports = {
	entry:'./index.js',
	output:{
		path: __dirname,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
		//{ test: /\.css$/,loader:'style-loader!css-loader!'}
		{ test: /\.css$/, loader: "style!css!" }
		]
	}
}