const path = require('path');
const outputDir = path.resolve(__dirname, 'dist/assets/js');

module.exports = {
  entry: path.resolve(__dirname, 'src/js'),
  output: {
    path: outputDir,
    filename: 'index.js'
  },
  module: {
    rules: [
      { 
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'] 
      }
    ]
  }
};