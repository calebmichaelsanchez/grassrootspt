var path = require("path");

module.exports = {
  resolve: {
    root: path.resolve(__dirname),
    extensions: ['', '.js']
  },
  entry: path.resolve(__dirname, "js"),
  output: {
    path: "./template/assets/",
    filename: "app.js.liquid"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
}
