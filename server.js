"use strict";
const express = require("express");
const serverless = require("serverless-http");
const app = express();
const bodyParser = require("body-parser");

const projects = require("./public/data/projects.json");

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

app.get("/projects/:slug", function (req, res) {
  res.render("pages/projects/" + req.params.slug);
});

app.get("/about", function (req, res) {
  res.render("pages/about");
});

app.get("/contact", function (req, res) {
  res.render("pages/contact");
});

app.post("/submit-form", function (req, res) {
  console.log("sending mail to", req.body);
  res.render("pages/success");
});

module.exports = app;
module.exports.handler = serverless(app);
