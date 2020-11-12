const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const dev = process.env.NODE_ENV === "dev";

const cssLoaders = [
  // Creates `style` nodes from JS strings
  { loader: "style-loader" },
  // Translates CSS into CommonJS
  {
    loader: "css-loader",
    options: { importLoaders: 1 },
  },
  {
    loader: "postcss-loader",
    options: {
      postcssOptions: {
        plugins: [
          ["autoprefixer"]
        ],
      },
    },
  }
];

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
    // new MiniCssExtractPlugin({
    //   filename: "[name].css"
    // }),
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
          // MiniCssExtractPlugin.loader,
          ...cssLoaders
        ],
      },
      {
        test: /\.scss$/,
        use: [
          // MiniCssExtractPlugin.loader,
          ...cssLoaders,
          // Compiles Sass to CSS
          'sass-loader'
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
      },
      {
        test: require.resolve('jquery'),
        loader: 'expose-loader',
        options: {
          exposes: ['$', 'jQuery'],
        },
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
