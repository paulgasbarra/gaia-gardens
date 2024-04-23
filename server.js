var express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
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

app.use(bodyParser.urlencoded({ extended: true }));

// After your previous code in server.js
app.post("/send", async (req, res) => {
  console.log(req.body);
  let { name, email, subject, message } = req.body;

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  let mailOptions = {
    from: "your-email@gmail.com",
    to: email, // or any email address you want to send to
    subject: subject,
    text: `Message from: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Failed to send email");
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
