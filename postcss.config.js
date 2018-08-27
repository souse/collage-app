var pxtorem = require('postcss-pxtorem');
var autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    autoprefixer(),
    pxtorem({
      rootValue: 100,
      propWhiteList: []
    })
  ]
}
