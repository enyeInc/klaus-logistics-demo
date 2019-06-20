module.exports = () => {
  /* eslint-disable */
  const withLess = require('@zeit/next-less')
  const fs = require('fs')
  const path = require('path')

  // fix: prevents error when .less files are required by node
  if (typeof require !== 'undefined') {
    require.extensions['.less'] = file => {}
  }
  return withLess({
    lessLoaderOptions: {
      javascriptEnabled: true,
      modifyVars: themeVariables // make your antd custom effective
    }
  })
};
