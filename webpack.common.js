var path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "js"),
  output: {
    path: path.resolve(__dirname, "template/assets"),
    filename: "app.js.liquid"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
}
