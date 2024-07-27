import hello from "./api/hello";

const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));
app.get("/naruto", (req, res) => res.json("Bố mầy là naruto đây"));
app.get('/hello',hello)
app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;