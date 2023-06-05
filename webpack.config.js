const path = require("path");
// const HtmlWebpackPlugin = require('html-webpack-plugin');

const source = path.resolve(__dirname, 'src');
const isDev = process.env.NODE_ENV === "development";

const createConfig = (modern = true) => ({
  mode: isDev ? "development" : "production",
  context: __dirname,
  entry: [
    "./src/index.js",
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "[path][name].[hash][ext][query]",
    filename: modern ? '[name].modern.js' : '[name].legacy.js',
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devtool: isDev ? 'inline-source-map' : 'source-map',
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: source,
        loader: "babel-loader",
        options: {
          presets: [
            ["@babel/preset-env", { targets: modern ? { esmodules: true } : "defaults" }],
            "@babel/preset-react"
          ],
        },
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => [
                  require('autoprefixer')
                ]
              }
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ],
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: './dist/index.html',
  //     minify: !isDev,
  //     scriptLoading: 'defer',
  //     inject: 'body',
  //     filename: modern ? 'index.html' : 'index-legacy.html',
  //   }),
  // ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  }
});

module.exports = [createConfig(true), createConfig(false)];
