const express = require("express");
const app = express();
const items = require("./routes/api/items");

app.get("/", (req, res) => res.send("Hello World"));
app.use("/api/items", items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
