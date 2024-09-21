const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle[contenthash].js",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(jpe?g|png|svg)$/i,
        exclude: /node_modules/,
        use: ["file-loader", "url-loader"],
        type: "asset",
      },
      {
        test: /\.css$/i,
        use: ["css-loader", "sass-loader"],
      },
    ],
  },
  // optimization: {
  //   minimizer: [
  //     "...",
  //     new ImageMinimizerPlugin({
  //       exclude: /node_modules/,
  //       minimizer: {
  //         implementation: ImageMinimizerPlugin.imageminMinify,
  //         options: {
  //           // Lossless optimization with custom option
  //           // Feel free to experiment with options for better result for you
  //           plugins: [
  //             ["gifsicle", { interlaced: true }],
  //             ["jpegtran", { progressive: true }],
  //             ["optipng", { optimizationLevel: 5 }],
  //             // Svgo configuration here https://github.com/svg/svgo#configuration
  //             [
  //               "svgo",
  //               {
  //                 plugins: [
  //                   {
  //                     name: "preset-default",
  //                     addAttributesToSVGElement: {
  //                       params: {
  //                         attributes: [{ xmlns: "http://www.w3.org/2000/svg" }],
  //                       },
  //                     },
  //                     params: {
  //                       overrides: {
  //                         removeViewBox: false,
  //                       },
  //                     },
  //                   },
  //                 ],
  //               },
  //             ],
  //           ],
  //         },
  //       },
  //     }),
  //   ],
  // },
};
