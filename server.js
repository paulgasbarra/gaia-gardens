"use strict";
import express from "express";
import serverless from "serverless-http";
import bodyParser from "body-parser";
import { projects } from "./public/data/projects.js";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

const oneDay = 86400000;
app.use(express.static("public", { maxAge: oneDay }));

app.get("/", function (req, res) {
  res.render("pages/index");
});

app.get("/projects", function (req, res) {
  res.render("pages/projects/index", { projects: projects });
});

app.get("/projects/:slug", function (req, res) {
  res.render("pages/projects/" + req.params.slug);
});

app.get("/about", function (req, res) {
  res.render("pages/about/index");
});

app.get("/contact", function (req, res) {
  res.render("pages/contact");
});

app.post("/submit-form", function (req, res) {
  console.log("sending mail to", req.body);
  res.render("pages/success");
});

export default app;
export const handler = serverless(app);
