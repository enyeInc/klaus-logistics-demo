const withOptimizedImages = require('next-optimized-images');
const withLess = require('@zeit/next-less')
const fs = require('fs')
const path = require('path')

if (typeof require !== 'undefined') {
  require.extensions['.less'] = file => {}
}

module.exports = withOptimizedImages(withLess({
  lessLoaderOptions: {
	javascriptEnabled: true,
  }
}));
