const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

const tw = tailwindcss();
const twFn = tw.plugins[0];

module.exports = {
  plugins: [
    {
      postcssPlugin: "safe-tailwind",
      Once(root, { result }) {
        const file = root.source?.input?.file || result.opts?.from || "";
        if (file.includes("node_modules")) {
          return;
        }
        return twFn(root, result);
      },
    },
    autoprefixer,
  ],
};
module.exports.postcss = true;
