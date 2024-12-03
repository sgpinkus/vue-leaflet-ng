import commonjs from "rollup-plugin-commonjs";
import VuePlugin from "rollup-plugin-vue";

export default {
  input: "./src/index.ts",
  output: [
    {
      file: "dist/vue-leaflet-ng.esm.js",
      format: "es",
      sourcemap: true,
    },
    {
      file: "dist/vue-leaflet-ng.cjs.js",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "dist/vue-leaflet-ng.umd.js",
      format: "umd",
      name: "vue-leaflet-ng",
      sourcemap: true,
      globals: {
        leaflet: "L",
        vue: "vue",
      },
    },
  ],
  plugins: [
    commonjs(),
    VuePlugin({
      css: false,
    }),
  ],
  external: ["vue"],
};
