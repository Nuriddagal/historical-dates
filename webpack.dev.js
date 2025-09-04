const { merge } = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  cache: {
    type: "filesystem",
  },
  devServer: {
    port: 3000,
    hot: true,
    open: true,
    watchFiles: ["src/**/*"],
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, "dist"),
      publicPath: "/",
    },
  },
  optimization: {
    minimize: false,
  },
});
