const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'esbuild-loader',
          options: {
            loader: 'tsx', // поддержка TSX
            target: 'es2020', // можно выше, если нужен
          },
        },
      },
    ],
  },
  cache: {
    type: 'filesystem', // кеш между запусками
  },
  devServer: {
    port: 3000,
    hot: true,
    open: true,
    watchFiles: ['src/**/*'],
    historyApiFallback: true,
  },
  optimization: {
    minimize: false, // без минификации в деве
  },
});
