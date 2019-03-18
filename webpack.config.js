'use strict';

var webpack = require('webpack');
var path    = require('path');

module.exports = {
	entry: './index.js',
	output: {
		filename: 'keira.js',
    path: path.resolve(__dirname, 'dist')
	},
	node: {
		fs: 'empty'
	},
	mode: 'development',
  module: {
    rules: [
      {
    		test: /\.m?js$/,
	      exclude: /(node_modules|bower_components)/,
  	    use: {
    	    loader: 'babel-loader',
      	  options: {
          	presets: ['@babel/preset-env']
        	}
      	}
    	}
    ]
  }
};

