module.exports = {
    entry: {
      main: './src/ts/main.ts',
      detail: './src/ts/detail.ts',
      cart: './src/ts/cart.ts',
      cartEmpty: './src/ts/cartEmpty.ts',
      header: './src/ts/header.ts',
      purchase:'./src/ts/purchase.ts',
      admin: './src/ts/admin/admin.ts',
      viewProduct:'./src/ts/admin/viewProduct.ts',
      addProduct:'./src/ts/admin/addProduct.ts',
      updateProduct: './src/ts/admin/updateProduct.ts',
      viewCategory: './src/ts/admin/viewCategory.ts',
      addCategory: './src/ts/admin/addCategory.ts'
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        }
      ]
    }
    ,
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    },
    output: {
      filename: '[name].bundle.js',
      path: __dirname + '/dist/js'
    }
  };