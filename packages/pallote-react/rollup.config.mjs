import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import json from "@rollup/plugin-json"; // Import JSON plugin
import peerDepsExternal from "rollup-plugin-peer-deps-external";

export default {
  input: "src/index.js",
  output: {
    file: "dist/index.js",
    format: "esm",
  },
  external: ["react", "react-dom"],
  plugins: [
    peerDepsExternal(),
    resolve({ extensions: [".js", ".jsx"] }),
    commonjs(),
    json(),
    babel({ presets: ["@babel/preset-react"], extensions: [".js", ".jsx"] }),
  ],
};
