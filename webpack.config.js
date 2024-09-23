const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './index.jsx',
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlPlugin({
      template: './src/index.html',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'src',
          globOptions: {
            ignore: ['**/index.html'],
          },
        },
      ],
    }),
    new CopyPlugin({
      patterns: [{ from: 'public', to: '' }],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: ['html-loader'],
      },
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: [/node_modules/],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [autoprefixer],
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(woff|woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.jsx', '.ts', '.js'],
  },
};
