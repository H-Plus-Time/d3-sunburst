import resolve from "rollup-plugin-node-resolve";

export default {
  entry: "index.js",
  dest: "build.js",
  format: "umd",
  moduleName: "layout",
  plugins: [resolve()]
};
