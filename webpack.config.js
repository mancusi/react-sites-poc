const path = require("path");

// const entries = glob.sync("./src/clients/**/*.tsx").reduce(function (obj, el) {
//   obj[path.parse(el).name] = el;
//   return obj;
// }, {});

const config = {
  entry: {
    vendor: ["@babel/polyfill", "react"],
    // ...entries,
  },
  output: {
    path: path.resolve(__dirname, "public/assets/js"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json", ".wasm", ".mjs", "*"],
  },
};

module.exports = config;
