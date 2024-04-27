var express = require("express");
var app = express();
const bodyParser = require("body-parser");

var projects = require("./public/data/projects.json");

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

const oneDay = 86400000;
app.use(express.static("public", { maxAge: oneDay }));

app.get("/", function (req, res) {
  res.render("pages/index");
});

app.get("/projects", function (req, res) {
  res.render("pages/projects", { projects: projects });
});

app.get("/about", function (req, res) {
  res.render("pages/about");
});

app.get("/contact", function (req, res) {
  res.render("pages/contact");
});

app.get("/projects/:slug", function (req, res) {
  res.render("pages/projects/" + req.params.slug);
});

app.post("/submit-form", function (req, res) {
  console.log("sending mail to", req.body);
  res.render("pages/success");
});
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
