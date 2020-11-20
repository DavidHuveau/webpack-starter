const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");

const dev = process.env.NODE_ENV === "dev";

let commonCssLoaders = [
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
        plugins: [["autoprefixer"]],
      },
    },
  },
];
if (!dev) {
  commonCssLoaders = commonCssLoaders.filter(
    (object) => object.loader !== "style-loader"
  );
  commonCssLoaders = [MiniCssExtractPlugin.loader, ...commonCssLoaders];
}

const config = {
  mode: dev ? "development" : "production",
  entry: ["./assets/js/app.js", "./assets/css/app.scss"],
  output: {
    filename: dev ? "bundle.js" : "bundle.[chunkhash:8].js",
    path: path.resolve(`${__dirname}/assets`, "dist"),
    publicPath: "./assets/dist/",
  },
  watch: dev,
  devtool: dev ? "eval-cheap-module-source-map" : false,
  plugins: [
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/,
        use: [...commonCssLoaders],
      },
      {
        test: /\.scss$/,
        use: [
          ...commonCssLoaders,
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/",
            },
          },
        ],
      },
      {
        test: require.resolve("jquery"),
        loader: "expose-loader",
        options: {
          exposes: ["$", "jQuery"],
        },
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};

if (!dev) {
  config.plugins.push(
    new MiniCssExtractPlugin({
      filename: dev ? "[name].css" : "[name].[contenthash:8].css",
    }),
  );
  config.plugins.push(
    new ManifestPlugin(),
  );
}

module.exports = config;
