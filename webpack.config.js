const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

const { resolve } = require("path");

module.exports = {
  entry: {
    app: "./index.js",
  },
  output: {
    path: resolve(__dirname, "build"),
    filename: "[name].[contenthash].js",
  },
  mode: "development",
  devServer: {
    port: 5555,
    static: "./build",
    hot: true,
    watchFiles: ["./*"],
  },
  resolve: {
    extensions: [".ts", ".js", "..."],
  },

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        use: [
          {
            loader: "img-optimize-loader",
            options: {
              compress: {
                mode: "high",
                webp: true,
                gifsicle: true,
                disableOnDevelopment: false,
              },
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.mp3$/i,
        use: ["file-loader"],
      },
      {
        test: /\.mp4$/i,
        use: ["file-loader"],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({ template: resolve(__dirname, "index.html") }),
    new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
    new webpack.HotModuleReplacementPlugin(),
  ],

  //   optimization: {
  //     minimizer: [
  //       "...",
  //       new ImageMinimizerPlugin({
  //         minimizer: {
  //           implementation: ImageMinimizerPlugin.imageminMinify,
  //           options: {
  //             plugins: [
  //               ["gifsicle", { interlaced: true }],
  //               ["jpegtran", { progressive: true }],
  //               ["optipng", { optimizationLevel: 5 }],
  //             ],
  //           },
  //         },
  //       }),
  //     ],
  //   },
};
