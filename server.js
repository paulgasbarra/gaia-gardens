var express = require("express");
var app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

const oneDay = 86400000;
app.use(express.static("public", { maxAge: oneDay }));

app.get("/", function (req, res) {
  res.render("pages/index");
});

app.get("/projects", function (req, res) {
  const projectData = [
    {
      slug: "verona-patio",
      image: "../assets/images/Gaia-Gardens-17-1.jpg",
      title: "A Patio for Friends",
      location: "Verona",
      description: "A lovely native escape surrounds the perfect hosting area.",
      full: false,
    },
    {
      slug: "verona-patio",
      image: "../assets/images/Gaia-Gardens-8.jpg",
      title: "Hilltop Hideaway",
      location: "Montclair",
      description: "Tucked inside a ring of ranture, a spectacular view.",
      full: false,
    },
    {
      slug: "verona-patio",
      image: "../assets/images/Gaia-Gardens-4.jpg",
      title: "A Moment of Mindfullness",
      location: "Genridge",
      description:
        "A peaceful retreat with a focus on meditation and relaxation.",
      full: true,
    },
  ];
  res.render("pages/projects", { projects: projectData });
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
