import { babel } from "@rollup/plugin-babel";
import jsx from "rollup-plugin-jsx";

const config = {
  input: "src/index.jsx",
  output: {
    file: "dist/index.esm.js",
    format: "esm",
  },
  external: [/@babel\/runtime/, "react"],
  plugins: [
    babel({
      babelHelpers: "runtime",
      plugins: ["@babel/plugin-transform-runtime"],
    }),
    jsx({ factory: "React.createElement" }),
  ],
};

export default config;
