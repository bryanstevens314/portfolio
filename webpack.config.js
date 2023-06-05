const path = require("path");

const source = path.resolve(__dirname, 'src');
const isDev = process.env.NODE_ENV === "development";


module.exports = {
  mode: isDev ? "development" : "production",
  context: __dirname,
  entry: [
    "@babel/polyfill", // enables async-await
    "./src/index.js",
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "[path][name].[hash][ext][query]",
    filename: '[name].js',
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: source,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
      {
        test: /\.css$/,
        // the order of `use` is important!
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
  optimization: {
    usedExports: true
  }
};
