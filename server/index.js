const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const authRoutes = require("./routes/auth.routes");
const todoRoutes = require("./routes/todo.routes");
const notesRoutes = require("./routes/notes.routes");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", authRoutes);
app.use("/api/todo", todoRoutes);
app.use("/api/notes", notesRoutes);

const { SERVER_PORT } = process.env;

app.listen(SERVER_PORT, () => {
  console.log(`Server is running on port http://localhost:${SERVER_PORT}`);
});

app.get("/", (req, res) => res.send("Hello World"));

