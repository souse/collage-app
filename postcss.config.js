var pxtorem = require('postcss-pxtorem');
var autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    autoprefixer(),
    pxtorem({
      rootValue: 50,
      propWhiteList: ['*']
    })
  ]
}