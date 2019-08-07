const express = require("express");
const app = express();
const items = require("./routes/api/items");
const stats = require("./routes/api/stats");
const static = require("./routes/api/static");
const leagues = require("./routes/api/leagues");

app.get("/", (req, res) => res.send("Hello World"));
app.use("/api/items", items);
app.use("/api/stats", stats);
app.use("/api/static", static);
app.use("/api/leagues", leagues);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
