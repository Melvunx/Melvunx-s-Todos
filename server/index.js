const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const loginRoutes = require("./routes/login.routes");
const todoRoutes = require("./routes/todo.routes");
const notesRoutes = require("./routes/notes.routes");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", loginRoutes);
app.use("/api/todo", todoRoutes);
app.use("/api/notes", notesRoutes);

const { SERVER_PORT } = process.env;

app.listen(SERVER_PORT, () => {
  console.log(`Server is running on port http://localhost:${SERVER_PORT}`);
});

app.get("/", (req, res) => res.send("Hello World"));

// app.get("/test", async (req, res) => {
//   const client = await pool.connect();

//   try {
//     const result = await client.query("SELECT * FROM account");
//     console.log(result.rows);

//     res.json(result.rows);
//   } catch (error) {
//     console.error("Il y a une erreur ! ", error);
//   } finally {
//     client.release();
//   }

//   res.status(404);
// });
