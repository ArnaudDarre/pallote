import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import json from "@rollup/plugin-json";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

export default {
  input: "src/index.js",
  output: {
    file: "dist/index.js",
    format: "esm",
  },
  external: [
    "react",
    "react-dom",
    "react-router-dom",
    "classnames",
    "@phosphor-icons/react",
    "react-syntax-highlighter",
    "prop-types"
  ],
  plugins: [
    peerDepsExternal(),
    resolve({ extensions: [".js", ".jsx"] }),
    commonjs(),
    json(),
    babel({
      presets: ["@babel/preset-react"],
      extensions: [".js", ".jsx"],
      babelHelpers: "bundled",
      exclude: "node_modules/**"
    }),
  ],
};
