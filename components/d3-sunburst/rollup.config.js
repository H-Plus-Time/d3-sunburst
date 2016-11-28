import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import babelrc from "babelrc-rollup";

// let pkg = require('./package.json');
// let external = Object.keys(pkg.dependencies);

export default {
  entry: "index.js",
  dest: "build.js",
  format: "umd",
  moduleName: "d3",
  plugins: [
    babel(babelrc()),
    resolve()
  ],
  // external: external
};
