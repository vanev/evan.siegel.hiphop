const path = require("path")

module.exports = {

  entry: "./index.jsx",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
          },
        },
      },
    ],
  },

  target: "web",

  devtool: "source-map",

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    historyApiFallback: true,
  },

}
