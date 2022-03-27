const fs = require("fs");

module.exports = {
  syntax: "postcss-scss",
  parser: "postcss-scss",
  plugins: [
    require("postcss-easy-import")({
      extensions: ".pcss",
    }),
		require("postcss-nested"),
    require("autoprefixer")({
      cascade: false,
    }),
    require("postcss-advanced-variables")({
      variables: JSON.parse(
        fs.readFileSync("./src/styles/variables.json", "utf-8")
      ),
    }),
    require("cssnano"),
  ],
};