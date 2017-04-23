const path = require("path")

module.exports = {

  entry: "./index.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  target: "web",

  devtool: "source-map",

  devServer: {
    contentBase: path.join(__dirname, "dist"),
  },

}
