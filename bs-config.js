module.exports = {
  proxy: "localhost:8080",
  files: ["public/**/*.{html,css,js}", "views/**/*.ejs"],
  ignore: ["node_modules"],
  reloadDelay: 10,
  ui: false,
  notify: false,
  port: 5000,
};
