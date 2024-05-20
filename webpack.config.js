module.exports = {
    entry: {
      main: './src/ts/main.ts',
      detail: './src/ts/detail.ts',
      cart: './src/ts/cart.ts',
      header: './src/ts/header.ts',
      purchase:'./src/ts/purchase.ts'
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    },
    output: {
      filename: '[name].bundle.js',
      path: __dirname + '/public/js'
    }
  };