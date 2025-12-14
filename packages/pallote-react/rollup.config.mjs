import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

export default {
  input: "src/index.ts",
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
  ],
  plugins: [
    peerDepsExternal(),
    resolve({ extensions: [".ts", ".tsx", ".js", ".jsx"] }),
    commonjs(),
    json(),
    typescript({ tsconfig: "./tsconfig.json" }),
  ],
};
