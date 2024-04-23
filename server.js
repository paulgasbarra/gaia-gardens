var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("pages/index");
});

app.get("/projects", function (req, res) {
  res.render("pages/projects");
});

app.get("/about", function (req, res) {
  res.render("pages/about");
});

app.get("/contact", function (req, res) {
  res.render("pages/contact");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
