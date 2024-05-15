"use strict";
import express from "express";
import bodyParser from "body-parser";
import { projects } from "./public/data/projects.js";
//import nodemailer from "nodemailer";

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
  // const { name, email, township, message } = req.body;
  // let transporter = nodemailer.createTransport({
  //   host: process.env.SMTP_HOST,
  //   port: process.env.SMTP_PORT,
  //   secure: true,
  //   auth: {
  //     user: process.env.EMAIL_ADDRESS,
  //     pass: process.env.EMAIL_PASSWORD,
  //   },
  // });
  // let mailOptions = {
  //   from: email,
  //   to: process.env.EMAIL_ADDRESS,
  //   subject: `Gaia Gardens Contact Request: ${name} from ${township} has contacted you`,
  //   text: `${name} writes ${message}`,
  // };
  // transporter.sendMail(mailOptions, (error, info) => {
  //   if (error) {
  //     console.error("Error sending mail:", error);
  //     res.render("pages/contact-error", { error: error.message });
  //   } else {
  //     console.log("Mail sent:", info.response);
  //     res.render("pages/contact-success");
  //   }
  // });
});

export default app;
