const path = require("path")

module.exports = {

  entry: "./index.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
          },
        },
      },
    ],
  },

  target: "web",

  devtool: "source-map",

  devServer: {
    contentBase: path.join(__dirname, "dist"),
  },

}
