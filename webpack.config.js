const path = require("path");
const handlebars = require('handlebars');
const generate = require('generate-file-webpack-plugin');
const glob = require("glob");
const fs = require("fs");


const templateEntries = glob.sync("./src/templates/**/*.tsx").reduce(function (obj, el) {
  obj[path.parse(el).name] = el;
  return obj;
}, {});

const generations = Object.entries(templateEntries).map(([k,v]) => {
  const extension = path.extname(v);
  const absolutePath = path.resolve(v);
  return generate({
    file: `${k}.tsx`,
    content: genHydrationTemplates(absolutePath.substring(0, absolutePath.length - extension.length)),
  })
})

const genHydrationConfig = {
  entry: {
    // no entries needed for generation.
  },
  output: {
    path: path.resolve(__dirname, "src/hydration"),
  },
  plugins: generations
}

const entries = glob.sync("./src/hydration/**/*.tsx").reduce(function (obj, el) {
  obj[path.parse(el).name] = el;
  return obj;
}, {});

const config = {
  entry: {
    vendor: ["@babel/polyfill", "react"],
    ...entries,
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

module.exports = [
  genHydrationConfig,
  config,
];
module.exports.parallelism = 1;

function genHydrationTemplates(importPath) {
  return handlebars.compile(fs.readFileSync(path.resolve(__dirname, "src/hydrator.hbs")).toString())({ importPath });
}
