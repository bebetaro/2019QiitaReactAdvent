const path = require("path");

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "../src/index.tsx"),
  output: {
    path: path.join(__dirname, "../docs"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },

  module: {
    rules: [
      {
        test: /\.([jt])sx?$/,
        exclude: /node_modules/,
        enforce: "pre",
        use: ["source-map-loader"]
      },
      {
        test: /\.([jt])sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
              experimentalWatchApi: true
            }
          }
        ]
      }
    ]
  },

  devServer: {
    writeToDisk: true,
    port: 5000,
    contentBase: path.join(__dirname, "../docs") // HTML等コンテンツのルートディレクトリ
  }
};
