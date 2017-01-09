var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');


var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    './app/App.js'
  ],
  output: {
    path: __dirname + '/public',
    filename: "bundle.js"
  },
  plugins: [HTMLWebpackPluginConfig],
  devServer: {
       inline:true,
       contentBase: './public',
       port: 3333
     },
  module: {
    loaders: [{	
		 test: /\.js$/, 
		 exclude: /node_modules/, 
		 loader: "babel-loader"
	  },
		{
		      test: /\.scss$/,
		      loader: 'style!css!sass'
		    }]
  }
};