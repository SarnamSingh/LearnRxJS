const path = require('path');

module.exports = {
  entry: './src/FilteringOperators/throttle.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options:{
            context:path.resolve(__dirname,'src'),
            configFile:'tsconfig.json'
        }
      }
    ]
  },
  resolve: {
    // root: path.resolve('./src'),
    extensions: [ '.ts', '.js', '.tsx' ]
  }
};