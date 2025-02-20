const { template } = require('@babel/core');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Arquivo de entrada
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'), // Diretório de saída
    filename: 'bundler.js', // Nome do arquivo de saída
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Para arquivos .css
        use: ['style-loader', 'css-loader'], // Usa os loaders de CSS
      },
      {
        test: /\.png$/, // Para arquivos .png
        use: ['file-loader'], // Usa o file-loader para imagens
      },
      {
        test: /\.(js|jsx)$/, // Para arquivos .js e .jsx
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'  
      },
      {
          test: /\.gif$/,
          type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({  // Also generate a test.html
      template: "./src/index.html",
      filename: "./index.html"
    })
  ],

  resolve: {
    fallback: {
      os: require.resolve("os-browserify/browser"),
      path: require.resolve('path-browserify')
    },
  },
};
