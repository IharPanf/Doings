var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true
  }
}).listen(8888, 'doings', function (err,result) {
  if (err) {
    console.log(err);
  }
  console.log(result);
  console.log('Server started:8888');
});
