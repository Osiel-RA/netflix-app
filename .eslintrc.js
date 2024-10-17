module.exports = {
  extends: ["expo", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto", // Cambia a "lf" si quieres forzar LF
      },
    ],
  },
};
