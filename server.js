const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public")); // for serving static files (e.g., CSS)

// Routes
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/submit-form", (req, res) => {
  const { username, email } = req.body;
  res.send(`Thanks ${username}! We received your email: ${email}`);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
