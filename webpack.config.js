const path = require('path');
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");
const dev = process.env.NODE_ENV === "dev";

let config = {
  mode: dev ? "development" : "production",
  // entry: ["./assets/js/app.js", "./assets/css/app.css"],
  entry: ["./assets/js/app.js"],
  output: {
    filename: 'bundle.js',
    path: path.resolve(`${__dirname}/assets`, 'dist'),
  },
  watch: dev,
  devtool : dev ? "eval-cheap-module-source-map" : false,
  plugins: [
    new webpack.ProvidePlugin({
      $: "jQuery",
      jQuery: "jQuery",
      "window.jQuery": "jQuery"
    })
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  }
};

// if (!dev) {
//   config.optimization.minimize = true;
//   config.optimization.minimizer.push(new TerserPlugin());
// }

module.exports = config;
